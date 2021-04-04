import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AvatarImage from "components/atoms/AvatarImage";

const MessengerListItem = (props) => {
  const { id, users, lastMessage } = props.data.item;
  const avatarUri = users[1].imageUri;
  const username = users[1].name;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("MessengerRoom", { id, name: username });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftContainer}>
        <AvatarImage uri={avatarUri} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text>{lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.createdDate}>{lastMessage.createdAt}</Text>
    </TouchableOpacity>
  );
};

export default MessengerListItem;
