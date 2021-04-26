import React from "react";
import { View, Text, Image } from "react-native";
import MessengerMessageBox from 'molecules/MessengerMessageBox';
const MessengerRoom = () => {
  return (
    <View >
      <MessengerMessageBox username='Vincent' message='asdf' />
      <MessengerMessageBox username='Vincent' message='asdf' />
      <MessengerMessageBox username='Vincent' message='asdf' />
      <MessengerMessageBox username='Vincent' message='asdf' />
      <MessengerMessageBox username='Vincent' message='asdf' />
    </View>
  );
};
export default MessengerRoom;
