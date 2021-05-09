import React, { useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import ChatMessageBox from "molecules/ChatMessageBox";
import {
  subscribeToChatRoom,
  createChatMessageInChatRoom,
  deleteChatMessageWithID,
  getChatRoomUserAndTermInfoFromRoomID,
  getSortedChatRoomMessagesFromChatRoomID,
} from "services/chat";
import RightAlignedContainer from "atoms/RightAlignedContainer";
import LeftAlignedContainer from "atoms/LeftAlignedContainer";
import AvatarImage from "atoms/AvatarImage";

const ChatRoom = ({ route }) => {
  const userContext = React.useContext(UserContext);
  const navigation = useNavigation();
  const chatRoomID = route.params.id;
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [userIDToUserInfo, setUserIDToUserInfo] = useState({});
  const [leaseTermID, setLeaseTermID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChatRoomUserAndTermInfoFromRoomID(chatRoomID)
      .then((chatRoomData) => {
        chatRoomData.userInfo.forEach((data) => {
          userIDToUserInfo[data.id] = {
            firstName: data.firstName,
            lastName: data.lastName,
            avatarImage: data.avatarImage,
          };
        });
        setUserIDToUserInfo(userIDToUserInfo);
        setLeaseTermID(chatRoomData.leaseTermID);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    getSortedChatRoomMessagesFromChatRoomID(route.params.id).then((data) => {
      setMessages(data);
    });
  }, []);

  useEffect(() => {
    const sub = subscribeToChatRoom(chatRoomID, (newMessage) => {
      setNewMessage(newMessage);
    });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setMessages([newMessage, ...messages]);
  }, [newMessage]);

  const sendMessage = () => {
    if (inputMessage == "") {
      return;
    }
    setInputMessage("");
    createChatMessageInChatRoom(chatRoomID, userContext.id, inputMessage);
  };

  const removeAllMessages = () => {
    messages.forEach((msg) => {
      deleteChatMessageWithID(msg.id).then((d) => console.log("delete", d));
    });
  };

  const renderChatMessageBox = ({ item }) => {
    if (item.userID == userContext.id) {
      return (
        <RightAlignedContainer>
          <ChatMessageBox message={item.content} alignment={"right"} />
          {userIDToUserInfo[item.userID] && (
            <AvatarImage
              size={30}
              uri={userIDToUserInfo[item.userID].avatarImage}
            />
          )}
        </RightAlignedContainer>
      );
    } else {
      return (
        <LeftAlignedContainer>
          {userIDToUserInfo[item.userID] && (
            <AvatarImage
              size={30}
              uri={userIDToUserInfo[item.userID].avatarImage}
            />
          )}
          <ChatMessageBox message={item.content} alignment={"left"} />
        </LeftAlignedContainer>
      );
    }
  };

  if (loading) {
    return <Text>Loading</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        inverted
        data={messages}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
        renderItem={renderChatMessageBox}
        keyExtractor={(item) => item.id}
      />
      <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding">
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={inputMessage}
              onChangeText={(text) => setInputMessage(text)}
              style={styles.input}
              placeholder="Type something nice"
            />
            <TouchableOpacity onPress={sendMessage}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={removeAllMessages}>
              <Text style={styles.send}>Clean</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "column", justifyContent: "center" }}
              onPress={() =>
                navigation.navigate("CreateIssue", { leaseTermID })
              }
            >
              <Ionicons name="ios-add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    flex: 1,
  },
  send: {
    alignSelf: "center",
    color: "lightseagreen",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
};

export default ChatRoom;
