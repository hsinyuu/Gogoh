import React from "react";
import Profile from "screens/Profile";
import PersonalInfo from "screens/PersonalInfo";
import LeaseHistory from "screens/LeaseHistory";
import Lease from "screens/Lease";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen
        name="LeaseHistory"
        component={LeaseHistory}
        options={{
          headerTitleStyle: { fontSize: 30 },
          headerStyle: { height: 110 },
        }}
      />
      <Stack.Screen
        name="Lease"
        component={Lease}
        options={{
          headerTitleStyle: { fontSize: 30 },
          headerStyle: { height: 110 },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;