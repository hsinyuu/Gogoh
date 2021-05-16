import React, { useContext } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import AvatarImage from "atoms/AvatarImage";

const WelcomeMessage = () => {
  const userContext = useContext(UserContext);
  const username = "Riley Cooper";
  console.log(userContext);
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.date}>Friday, 4 Sep</Text>
        <Text style={styles.message}>{`Hi, ${username}`}</Text>
      </View>
      <AvatarImage size={50} uri={userContext.avatarImage} />
    </View>
  );
};

const styles = {
  container: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageContainer: {
    flexDirection: "column",
  },
  date: {
    marginBottom: 5,
    fontSize: 16,
    fontFamily: "Avenir-Heavy",
    color: "#7986BF"
  },
  message: {
    fontSize: 28,
    color: "#102733",
    fontFamily: "Avenir-Heavy"
  },
};

export default WelcomeMessage;
