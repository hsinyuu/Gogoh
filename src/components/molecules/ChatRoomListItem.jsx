import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from 'moment';
import { useNavigation } from "@react-navigation/native";
import AvatarImage from "components/atoms/AvatarImage";

const ChatRoomListItem = (props) => {
  const { chatRoomID, updatedAt, chatUsers, chatMessages} = props;
  const lastMessage = chatMessages.length != 0 ? chatMessages[0].content : "Join and start a conversation"
  const navigation = useNavigation();
  const onPress = () => {
    console.log(chatRoomID)
    navigation.navigate("ChatRoom", { id, name: chatRoomID });
  }
  //return <Text>{`${updatedAt} ${chatUsers[0].user.firstName}`}</Text>;
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.leftContainer}>
          <AvatarImage size={60} uri={chatUsers[0].user.avatarImage} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{chatUsers[0].user.firstName}</Text>
            <Text style={styles.detail}>{lastMessage}</Text>
          </View>
        </View>
        <Text style={styles.createdDate}>{moment(updatedAt, "YYYYMMDD").fromNow()}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ChatRoomListItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "#444444",
  },
  username: {
    color: "#444444",
    fontWeight: "800",
  },
  detail: {
    color: "grey",
  },
  createdDate: {
    color: "#444444",
    margin: 20
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  midContainer: {
    margin: 10,
    flexDirection: "column",
//    justifyContent: "space-between",
    height: "50%",
    //backgroundColor: 'pink'
  },
});


/*
const MessengerListItem = (props) => {
  const { id, users, lastMessage } = props.data.item;
  const avatarUri = users[1].imageUri;
  const username = users[1].name;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("MessengerRoom", { id, name: username });
  };
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.leftContainer}>
          <AvatarImage size={60} uri={avatarUri} />
          <View style={styles.midContainer}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.detail}>{lastMessage.content}</Text>
          </View>
        </View>
        <Text style={styles.createdDate}>{moment(lastMessage.createdAt, "YYYYMMDD").fromNow()}</Text>
      </TouchableOpacity>
    </View>
  );
};
*/