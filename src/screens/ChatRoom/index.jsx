import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import ChatMessageBox from "molecules/ChatMessageBox";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  getChatRoomMessagesFromChatRoomID,
  getChatRoomUsernamesAndAvatarFromChatRoomID,
} from "services/chat";

const ChatRoom = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [userIDToUserInfo, setUserIDToUserInfo] = useState({});
  useEffect(() => {
    console.log(route.params.id);
    getChatRoomUsernamesAndAvatarFromChatRoomID(route.params.id).then(
      (chatUsersData) => {
        chatUsersData.forEach((data) => {
          userIDToUserInfo[data.id] = {
            firstName: data.firstName,
            lastName: data.lastName,
            avatarImage: data.avatarImage,
          };
        });
        setUserIDToUserInfo(userIDToUserInfo);
        console.log(userIDToUserInfo);
      }
    );
    getChatRoomMessagesFromChatRoomID(route.params.id).then((data) =>
      setMessages(data.items)
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ChatMessageBox
            username={userIDToUserInfo[item.userID]}
            message={item.content}
          />
        )}
      />
      <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding">
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Type something nice" />
            <TouchableOpacity>
              <Text style={styles.send}>Send</Text>
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
