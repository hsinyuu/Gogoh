import React, { useContext } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import Event from "molecules/Event"

const Home = () => {
  const navigation = useNavigation();
  const userContext = useContext(UserContext);
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.container}>
        </View>
      </ScrollView>
    </SafeAreaView>
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
