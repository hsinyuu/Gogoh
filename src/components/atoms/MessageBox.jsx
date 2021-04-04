import React from "react";
import { View, Text } from "react-native";

const MessageBox = (props) => {
  const { username, message } = props;
  return (
    <View style={styles.container}>
      <Text>{username}</Text>
      <Text>{message}</Text>
    </View>
  );
};

const styles = {
    container: {
        backgroundColor: 'pink',
        margin: 5,
        borderRadius: 5
    }


}

export default MessageBox;
