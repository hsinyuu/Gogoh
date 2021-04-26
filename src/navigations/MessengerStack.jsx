import React from "react";
import Messenger from "screens/Messenger";
import MessengerRoom from "screens/MessengerRoom";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const MessengerHeader = () => {
  return (
    <View
      style={{ flexDirection: "row", backgroundColor: "pink", width: "100%" }}
    >
      <Text style={{ fontSize: 30 }}>title</Text>
    </View>
  );
};
/*
            <TouchableOpacity
              style={{
                backgroundColor: "pink",
                padding: 5,
                margin: 10,
                borderRadius: 10,
              }}
            >
              <Text>Search</Text>
            </TouchableOpacity>
*/

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
        name="MessengerRoom"
        component={MessengerRoom}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default MessengerStack;
