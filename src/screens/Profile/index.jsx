import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import OptionItem from "molecules/OptionItem";
import { AntDesign } from "@expo/vector-icons";
import AvatarImage from "atoms/AvatarImage";
import { FlatList } from "react-native-gesture-handler";
import { UserContext } from "../../context/UserContext";

async function logout() {
  try {
    console.log("Signout");
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const optionList = [
  {
    id: "0",
    name: "Personal information",
    navigateTo: "PersonalInfo",
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "7",
    name: "Lease history",
    navigateTo: "LeaseHistory",
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "1",
    name: "Payment",
    navigateTo: null,
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "2",
    name: "Notifications",
    navigateTo: null,
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "3",
    name: "My lists",
    navigateTo: null,
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "4",
    name: "My offers",
    navigateTo: null,
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "5",
    name: "Account security",
    navigateTo: null,
    onPress: null,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
  {
    id: "6",
    name: "Logout",
    navigateTo: null,
    onPress: logout,
    icon: <AntDesign name="profile" size={24} color="#444444" />,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const userContext = React.useContext(UserContext);
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: 10,
          }}
        >
          <AvatarImage size={100} uri={userContext.avatarImage} />
          <Text style={{ fontSize: 30, color: "#444444", padding: 10 }}>
            {`${userContext.firstName} ${userContext.lastName}`}
          </Text>
        </View>
        <FlatList
          data={optionList}
          renderItem={({ item }) => {
            return (
              <OptionItem
                name={item.name}
                onPress={item.onPress}
                navigateTo={item.navigateTo}
                icon={item.icon}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
