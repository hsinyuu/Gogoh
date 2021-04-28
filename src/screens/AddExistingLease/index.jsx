import React, { useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "utils/hooks";
import { TextInput, Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  fetchOrCreateProperty,
  createNewLeaseTerm,
  createLeaseTenantForLeaseTerm,
} from "services/lease";

const AddExistingLease = ({ route }) => {
  const address = route.params.name;
  const placeID = route.params.id;
  const userContext = React.useContext(UserContext);
  const navigation = useNavigation();
  const [formValues, setFormValues] = useForm({
    landlordEmail: "",
    propertyAddress: address,
    leaseStartDate: "",
    leaseEndDate: "",
  });

  const createLeaseForTenantAndLandlord = () => {
    fetchOrCreateProperty(formValues.propertyAddress)
      .then((propertyData) => propertyData.id)
      .then((propertyID) =>
        createNewLeaseTerm(
          propertyID,
          formValues.leaseStartDate,
          formValues.leaseEndDate
        )
      )
      .then((leaseTermData) =>
        createLeaseTenantForLeaseTerm(userContext.id, leaseTermData.id)
      )
      .then((leaseTenantUserData) =>
        navigation.navigate("Lease", {
          leaseTermID: leaseTenantUserData.leaseTermID,
        })
      );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        Invite landlord to add the current contract
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{width:388, borderRadius:10, marginBottom: 20, paddingLeft:10, flexDirection: 'column', justifyContent: 'center', height: 50, borderWidth:1}}
      >
        <Text>{formValues.propertyAddress}</Text>
      </TouchableOpacity>
      <TextInput
        onChangeText={(text) => setFormValues("landlordEmail", text)}
        placeholder={"landlord email"}
        style={styles.input}
      ></TextInput>
      <TextInput
        onChangeText={(text) => setFormValues("leaseStartDate", text)}
        placeholder={"lease start date"}
        style={styles.input}
      ></TextInput>
      <TextInput
        onChangeText={(text) => setFormValues("leaseEndDate", text)}
        placeholder={"lease end date"}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity
        onPress={createLeaseForTenantAndLandlord}
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

export default AddExistingLease;
