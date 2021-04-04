import React from "react";
import { View, Text, Image } from "react-native";
import MessageBox from 'components/atoms/MessageBox';
const MessengerRoom = () => {
  return (
    <View >
      <MessageBox username='Vincent' message='asdf' />
      <MessageBox username='Vincent' message='asdf' />
      <MessageBox username='Vincent' message='asdf' />
      <MessageBox username='Vincent' message='asdf' />
      <MessageBox username='Vincent' message='asdf' />
    </View>
  );
};
export default MessengerRoom;
