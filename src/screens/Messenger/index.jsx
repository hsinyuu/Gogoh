import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import ChatRoomListItem from "molecules/ChatRoomListItem";
import { FlatList } from "react-native-gesture-handler";
import { UserContext } from "../../context/UserContext";
import { getChatRoomsFromUserID } from "services/chat";
import { SafeAreaView } from "react-native-safe-area-context";


const Messenger = () => {
  const userContext = React.useContext(UserContext);
  const [chatRooms, setChatRooms] = useState(null);
  useEffect(() => {
    getChatRoomsFromUserID(userContext.id).then((data) => {
      setChatRooms(data);
    });
  }, []);
  if (chatRooms == null)
    return (
      <SafeAreaView>
        <Text>loading</Text>
      </SafeAreaView>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms.chatUsers.items}
        renderItem={({ item }) => 
          <ChatRoomListItem
            chatRoomID={item.chatRoom.id}
            updatedAt={item.chatRoom.updatedAt}
            chatUsers={item.chatRoom.chatUsers.items}
            chatMessages={item.chatRoom.chatMessages.items}
          />
        }
        keyExtractor={(item) => item.chatRoom.id}
      />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    height: "100%",
  },
};

export default Messenger;

/*
      <FlatList
        data={chatRoom}
        renderItem={(item) => <MessengerListItem data={item} />}
        keyExtractor={(item) => item.id}
      />
      */
