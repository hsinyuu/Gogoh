import React, { useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Event from "molecules/Event";
import { FontAwesome } from "@expo/vector-icons";
import AvatarImage from "atoms/AvatarImage";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import {
  listAllLeaseLandlords,
  listAllLeaseTenants,
  listAllLeaseTerms,
  deleteLeaseTenantFromID,
  deleteLeaseLandlordFromID,
  deleteLeaseTermFromID
} from "services/lease";

const Home = () => {
  const navigation = useNavigation();
  const userContext = React.useContext(UserContext);
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <Text>{`${userContext.firstName}, ${userContext.lastName}`}</Text>
      <AvatarImage size={50} uri={userContext.avatarImage} />
      <View style={styles.container}>
        <Text style={styles.header}>Lease term</Text>
        <Event
          name="Has an existing contract?"
          details="Invite landlord to get started"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
          callback={() => navigation.navigate("AddressSearch")}
        />
        <Event
          name="Remove all lease tenants"
          details="asdf"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
          callback={() => {
            listAllLeaseTenants().then(({ items }) => {
              items.forEach((itm) => {
                console.log(itm);
                deleteLeaseTenantFromID(itm.id);
              });
            });
          }}
        />
        <Event
          name="Remove all lease landlords"
          details="asdf"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
          callback={() => {
            listAllLeaseLandlords().then(({ items }) => {
              items.forEach((itm) => {
                console.log(itm);
                deleteLeaseLandlordFromID(itm.id);
              });
            });
          }}
        />
        <Event
          name="Remove all lease terms"
          details="asdf"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
          callback={() => {
            listAllLeaseTerms().then(({ items }) => {
              items.forEach((itm) => {
                console.log(itm);
                deleteLeaseTermFromID(itm.id);
              });
            });
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Upcoming events</Text>
        <Event
          name="Add profile info"
          details="test"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
        />
        <Event
          name="Add profile info"
          details="test"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
        />
        <Event
          name="Add profile info"
          details="test"
          icon={<FontAwesome name="address-card-o" size={40} color="black" />}
        />
      </View>
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
