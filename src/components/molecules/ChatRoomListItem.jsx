import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import AvatarImage from "components/atoms/AvatarImage";

const ChatRoomListItem = (props) => {
  const { chatRoomID, updatedAt, chatUsers, chatMessages } = props;
  const lastMessage =
    chatMessages.length != 0
      ? chatMessages[0].content
      : "Join and start a conversation";
  const navigation = useNavigation();
  const onPress = () => {
    console.log(chatRoomID);
    navigation.navigate("ChatRoom", { id: chatRoomID, name: chatRoomID });
  };
  return (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        { flexDirection: "row", alignItems: "center"},
      ]}
      onPress={onPress}
    >
      <AvatarImage
        size={50}
        shadowed={true}
        uri={chatUsers[0].user.avatarImage}
      />
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft:20
        }}
      >
        <View style={{flexDirection:"row", width:'100%', justifyContent:"space-between", alignItems:"center"}}>
          <Text style={styles.username}>{chatUsers[0].user.firstName}</Text>
          <Text style={styles.createdDate}>
            {moment(updatedAt, "YYYYMMDD").fromNow()}
          </Text>
        </View>
        <Text style={styles.detail}>{lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ChatRoomListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "white",
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  username: {
    color: "#444444",
    fontFamily: "Avenir-Heavy",
    fontSize: 16,
  },
  detail: {
    color: "grey",
    fontFamily: "Avenir-Book",
    fontSize: 14,
  },
  createdDate: {
    color: "#969ECC",
  },
});

/*
        <View style={styles.leftContainer}>
          <AvatarImage
            size={50}
            shadowed={true}
            uri={chatUsers[0].user.avatarImage}
          />
          <View style={styles.midContainer}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                backgroundColor: "pink",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.username}>{chatUsers[0].user.firstName}</Text>
              <Text style={styles.createdDate}>
                {moment(updatedAt, "YYYYMMDD").fromNow()}
              </Text>
            </View>
            <View style={{flex:1}}>
              <Text style={[styles.detail, { flex: 1 }]}>{lastMessage}</Text>
            </View>
          </View>
        </View>
*/
