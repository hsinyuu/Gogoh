import React from "react";
import { View, Text, Image } from "react-native";
import MessengerListItem from "components/molecules/MessengerListItem";
import styles from "./styles";
import chatRoom from "assets/ChatRooms";
import { FlatList } from "react-native-gesture-handler";

const Messenger = () => {
  return (
    <View style={{ paddingTop: 50 }}>
      <Text style={styles.screenHeader}>Messenger</Text>
      <FlatList
        data={chatRoom}
        renderItem={(item) => <MessengerListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

/*
container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  */
export default Messenger;
