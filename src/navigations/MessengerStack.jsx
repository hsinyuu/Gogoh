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
          headerTitleStyle: { fontSize: 30 },
          headerStyle: { height: 110 },
          headerRight: () => (
            <TouchableOpacity>
              <Text style={{ fontSize: 18, padding: 10 }}>Search</Text>
            </TouchableOpacity>
          ),
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
