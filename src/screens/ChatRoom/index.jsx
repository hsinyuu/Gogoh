import React from "react";
import { TextInput, Text, Image } from "react-native";
import ChatMessageBox from 'molecules/ChatMessageBox';
import { SafeAreaView } from "react-native-safe-area-context";
const ChatRoom = () => {
  return (
    <SafeAreaView>
      <ChatMessageBox username='Vincent' message='asdf' />
      <ChatMessageBox username='Vincent' message='asdf' />
      <ChatMessageBox username='Vincent' message='asdf' />
      <ChatMessageBox username='Vincent' message='asdf' />
      <ChatMessageBox username='Vincent' message='asdf' />
      <TextInput placeholder={"asdf"}/>
    </SafeAreaView>
  );
};
export default ChatRoom;