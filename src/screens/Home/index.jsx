import React, { useContext } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "molecules/ImageCard";
import EventListWidget from "organisms/EventListWidget";
import WelcomeMessage from "molecules/WelcomeMessage";

const Home = () => {
  const navigation = useNavigation();
  const userContext = useContext(UserContext);
  return (
    <View style={{ paddingTop: 50, height: "100%", backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.container}>
          <WelcomeMessage />
          <EventListWidget />
          <ImageCard title={"Verify identity with photo ID"} image={require("../../assets/illustrations/VerifyID.png")}/>
          <ImageCard title={"Invite your landlord to get started"} image={require("../../assets/illustrations/InviteLeasePartner.png")}/>
          <ImageCard title={"Let us know more about you"} subtitle={"Complete your profile"} image={require("../../assets/illustrations/EditProfile.png")}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = {
  container: {
    flexDirection: "column",
    margin: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "700",
    color: "#444444",
    marginBottom: 10,
  },
  content: {
    fontSize: 20,
    fontWeight: "500",
    color: "grey",
  },
  placeholder: {
    height: 30,
  },
};
