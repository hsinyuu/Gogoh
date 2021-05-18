import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import ChatRoomListItem from "molecules/ChatRoomListItem";
import { FlatList } from "react-native-gesture-handler";
import { UserContext } from "../../context/UserContext";
import { getChatRoomsFromUserID } from "services/chat";

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
      <View style={styles.container}>
        <Text>loading</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{"Chat"}</Text>
      <FlatList
        data={chatRooms.chatUsers.items}
        renderItem={({ item }) => (
          <ChatRoomListItem
            chatRoomID={item.chatRoom.id}
            updatedAt={item.chatRoom.updatedAt}
            chatUsers={item.chatRoom.chatUsers.items}
            chatMessages={item.chatRoom.chatMessages.items}
          />
        )}
        keyExtractor={(item) => item.chatRoom.id}
      />
    </View>
  );
};

<View style={{}}></View>;
const styles = {
  container: {
    paddingTop: 80,
    paddingHorizontal: 30,
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    paddingBottom: 40,
    fontSize: 30,
    color: "#102733",
    fontFamily: "Avenir-Heavy",
  },
};

export default Messenger;
