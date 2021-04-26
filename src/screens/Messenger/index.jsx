import React from "react";
import { View, Text, Image } from "react-native";
import MessengerListItem from "components/molecules/MessengerListItem";
import chatRoom from "assets/ChatRooms";
import { FlatList } from "react-native-gesture-handler";

const Messenger = () => {
  const addChatRoom = () => {

  }
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRoom}
        renderItem={(item) => <MessengerListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor:'white',
    paddingTop: 20,
    height: '100%'
  }
}

export default Messenger;