import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from "navigations/MainBottomTabs";
import Amplify from "aws-amplify";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <NavigationContainer>
      <MainBottomTabs />
    </NavigationContainer>
  );
}

const MyInput = Object.assign({}, AmplifyTheme.Input, {borderColor: 'grey', padding: 16, borderWidth: 1, borderRadius: 10, height:50});
const MyTheme = Object.assign({}, AmplifyTheme, { input: MyInput });


//export default withAuthenticator(App, { includeGreetings: false });
export default withAuthenticator(App, false, [], null, MyTheme);
