import React from "react";
import { View, Text } from "react-native";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";

const ChatMessageBox = (props) => {
  const { message, alignment } = props;

  return (
    <View style={[styles.messageBox, {alignSelf: 'flex-start'}]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = {
    messageBox: {
        backgroundColor: '#011627',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageText: {
        color: '#FFFFFF',
    }
}

export default ChatMessageBox;
