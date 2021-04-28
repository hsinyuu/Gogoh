import React from "react";
import Home from "screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import AddExistingLease from "screens/AddExistingLease";
import AddressSearch from "screens/AddressSearch";
import Lease from "screens/Lease";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: { fontSize: 30 },
          headerStyle: { height: 110 },
        }}
      />
      <Stack.Screen 
        name="AddressSearch"
        component={AddressSearch}
        options={{
          headerTitleStyle: { fontSize: 30 },
          headerStyle: { height: 110 },
        }}
      />
      <Stack.Screen
        name="AddExistingLease"
        component={AddExistingLease}
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

export default HomeStack;
