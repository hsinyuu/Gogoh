import React from "react";
import { Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Auth } from "aws-amplify";

async function signOut() {
    try {
        console.log("Signout")
        await Auth.signOut()
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={signOut}
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "pink",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>Signout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
