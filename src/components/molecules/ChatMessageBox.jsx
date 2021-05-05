import React from "react";
import { View, Text } from "react-native";

const ChatMessageBox = (props) => {
  const { username, message } = props;
  return (
    <View style={styles.messageBox}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = {
    messageBox: {
        backgroundColor: '#011627',
        width: '70%',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    messageText: {
        color: '#FFFFFF',
    }
}

export default ChatMessageBox;
