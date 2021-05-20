import React, { useState } from "react";
import { View, SafeAreaView, TextInput, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useForm } from "utils/hooks";
import { createNewUser } from "services/user";

const CreateUser = (props) => {
  const { setCreateUser } = props;
  const [formValues, setFormValues] = useForm({
    firstName: "",
    lastName: "",
    userRole: "Tenant",
  });
  const createButtonPressed = async () => {
    await createNewUser (
        formValues.firstName,
        formValues.lastName,
        formValues.userRole
    ).then(() => {
        setCreateUser(false);
    })
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          onChangeText={(text) => setFormValues("firstName", text)}
          style={styles.input}
          placeholder={"first name"}
        />
        <TextInput
          onChangeText={(text) => setFormValues("lastName", text)}
          style={styles.input}
          placeholder={"last name"}
        />
      </View>
      <Picker
        selectedValue={formValues["userRole"]}
        onValueChange={(itemValue, itemIndex) =>
          setFormValues("userRole", itemValue)
        }
      >
        <Picker.Item label="Tenant" value="Tenant" />
        <Picker.Item label="Landlord" value="Landlord" />
      </Picker>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={createButtonPressed}
          style={styles.submitButton}
        >
          <Text style={{ color: "white" }}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;

const styles = {
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    //flexDirection: "column",
  },
  subContainer: {
    paddingTop: 100,
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
