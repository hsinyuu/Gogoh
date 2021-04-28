import React, { useState, useEffect } from "react";
import { Text, FlatList, SafeAreaView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAddressAutoCompleteSuggestion } from "services/location";
import { useNavigation } from "@react-navigation/native";

const AutocompletePredictionItem = (props) => {
  const { name, id } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
      }}
      onPress={() => navigation.navigate("AddExistingLease", { name, id })}
    >
      <Text style={{ padding: 10 }}>{name}</Text>
    </TouchableOpacity>
  );
};

const AddressSearch = () => {
  const [inputAddress, setInputAddress] = useState("");
  const [autoCompleteAddress, setAutoCompleteAddress] = useState([]);

  useEffect(() => {
    getAddressAutoCompleteSuggestion(inputAddress).then(
      (autoCompleteResults) => {
        console.log(autoCompleteAddress);
        setAutoCompleteAddress(autoCompleteResults);
      }
    );
  }, [inputAddress]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={(text) => setInputAddress(text)}
        placeholder={"address"}
        style={styles.input}
      ></TextInput>
      <FlatList
        style={{ width: "90%" }}
        data={autoCompleteAddress}
        renderItem={({ item }) => {
          return (
            <AutocompletePredictionItem
              name={item.description}
              id={item.place_id}
            />
          );
        }}
        keyExtractor={(item) => item.index}
      />
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

export default AddressSearch;
