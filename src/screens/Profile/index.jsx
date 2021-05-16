import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import OptionItem from "molecules/OptionItem";
import { AntDesign } from "@expo/vector-icons";
import AvatarImage from "atoms/AvatarImage";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { UserContext } from "../../context/UserContext";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const iconColor = "#E1617F";
async function logout() {
  try {
    console.log("Signout");
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const Profile = () => {
  const navigation = useNavigation();
  const userContext = React.useContext(UserContext);
  return (
    <View style={{ paddingTop: 50, height: "100%", backgroundColor: "white" }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>{"Profile"}</Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: 10,
          }}
        >
          <AvatarImage
            size={60}
            uri={userContext.avatarImage}
            shadowed={true}
          />
          <Text style={styles.sectionHeader}>
            {`${userContext.firstName} ${userContext.lastName}`}
          </Text>
        </View>
        <Text style={styles.sectionHeader}>Account setting</Text>
        <OptionItem
          name={"Lease history"}
          onPress={null}
          navigateTo={"LeaseHistory"}
          icon={
            <MaterialCommunityIcons name="bed" size={24} color={iconColor} />
          }
        />
        <OptionItem
          name={"Payment"}
          onPress={null}
          navigateTo={null}
          icon={<MaterialIcons name="payment" size={24} color={iconColor} />}
        />
        <OptionItem
          name={"Notification"}
          onPress={null}
          navigateTo={null}
          icon={
            <MaterialIcons name="notifications" size={24} color={iconColor} />
          }
        />
        <OptionItem
          name={"Logout"}
          onPress={logout}
          navigateTo={null}
          icon={
            <MaterialCommunityIcons name="logout" size={24} color={iconColor} />
          }
        />
        <View style={{ height: 40 }} />
        <Text style={styles.sectionHeader}>Security</Text>
        <OptionItem
          name={"ID verification"}
          onPress={null}
          navigateTo={null}
          icon={<AntDesign name="idcard" size={24} color={iconColor} />}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = {
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    padding: 30,
    flexDirection: "column",
  },
  header: {
    fontSize: 30,
    color: "#102733",
    fontFamily: "Avenir-Heavy",
  },
  sectionHeader: {
    fontSize: 18,
    marginVertical: 15,
    color: "#444444",
    fontFamily: "Avenir-Heavy",
  },
};