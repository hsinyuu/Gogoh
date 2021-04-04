import React from "react";
import { View, Text, Image } from "react-native";
import MessengerListItem from "components/molecules/MessengerListItem";
import chatRoom from "assets/ChatRooms";
import { FlatList } from "react-native-gesture-handler";

const Messenger = () => {
  return (
    <View>
      <FlatList
        data={chatRoom}
        renderItem={(item) => <MessengerListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default Messenger;
