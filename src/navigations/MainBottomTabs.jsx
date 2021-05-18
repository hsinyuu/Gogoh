import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DebugStack from "navigations/DebugStack";
import MessengerStack from "navigations/MessengerStack";
import ProfileStack from "navigations/ProfileStack";
import HomeStack from "navigations/HomeStack";
import Explore from "screens/Explore";

const Tab = createBottomTabNavigator();

const setTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = ["ChatRoom", "CreateIssue"];
  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;
};

const MainBottomTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{ inactiveTintColor:'#D2D6FA', activeTintColor: "#7986BF" }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={MessengerStack}
        options={({ route }) => ({
          tabBarVisible: setTabBarVisible(route),
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Debug"
        component={DebugStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="api" size={24} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainBottomTabs;
