import React, { useState, useEffect } from "react";
import { TextInput, Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserContext } from "../../context/UserContext";
import { useForm } from "utils/hooks";
import { getUserByEmail } from "services/user";
import { createChatRoomWithUsers } from "services/chat";
import { useNavigation } from "@react-navigation/native";

const CreateChat = () => {
  const userContext = React.useContext(UserContext);
  const [formValues, setFormValues] = useForm({
    inviteEmail: "",
  });

  const createChatRoomAndPopulateUsers = () => {
    getUserByEmail(formValues.inviteEmail).then((data) => {
      if (data.items.length == 0) {
        console.warn("User email doesn't exist");
        return;
      } else {
        createChatRoomWithUsers([data.items[0].id, userContext.id]).then(
          (chatRoomData) => console.log(chatRoomData)
        );
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>Invite a person to chat</Text>
      <TextInput
        onChangeText={(text) => setFormValues("inviteEmail", text)}
        placeholder={"invite email"}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        style={styles.input}
      ></TextInput>
      <TouchableOpacity
        onPress={createChatRoomAndPopulateUsers}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Invite</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  description: {
    fontSize: 15,
    marginVertical: 50,
  },
  input: {
    marginBottom: 20,
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#444444",
    fontSize: 15,
    paddingLeft: 10,
  },
  submitButton: {
    width: "30%",
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#f15454",
    borderRadius: 10,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "600",
  },
};

export default CreateChat;
