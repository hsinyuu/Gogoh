import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const MessengerListItem = (props) => {
  const { users, lastMessage } = props.data.item;
  const avatarUri = users[1].imageUri;
  const username = users[1].name;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: avatarUri }} style={styles.avatar}></Image>
        <View style={styles.midContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text>{lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.createdDate}>{lastMessage.createdAt}</Text>
    </View>
  );
};

export default MessengerListItem;
