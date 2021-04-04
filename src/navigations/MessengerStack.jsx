import React from "react";
import Messenger from "screens/Messenger";
import MessengerRoom from "screens/MessengerRoom";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const MessengerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messenger" component={Messenger} />
      <Stack.Screen
        name="MessengerRoom"
        component={MessengerRoom}
        options={({ route }) => ({ title: route.params.name})}

      />
    </Stack.Navigator>
  );
};

export default MessengerStack;
