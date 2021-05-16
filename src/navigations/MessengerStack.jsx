import React from "react";
import Messenger from "screens/Messenger";
import ChatRoom from "screens/ChatRoom";
import CreateIssue from "screens/CreateIssue";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const MessengerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Messenger"
        component={Messenger}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="CreateIssue"
        component={CreateIssue}
      />
    </Stack.Navigator>
  );
};

export default MessengerStack;
