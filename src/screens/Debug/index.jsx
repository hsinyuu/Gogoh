import React, { useContext } from "react";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import APIItem from "molecules/APIItem";
import AvatarImage from "atoms/AvatarImage";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import {
  listAllLeaseLandlords,
  listAllLeaseTenants,
  listAllLeaseTerms,
  deleteLeaseTenantFromID,
  deleteLeaseLandlordFromID,
  deleteLeaseTermFromID,
} from "services/lease";
import { deleteAllChatRoomAndChatUser } from "services/chat";

const Debug = () => {
  const navigation = useNavigation();
  const userContext = React.useContext(UserContext);
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <ScrollView>
        <Text>{`${userContext.firstName}, ${userContext.lastName}`}</Text>
        <AvatarImage size={50} uri={userContext.avatarImage} />
        <View style={styles.container}>
          <Text style={styles.header}>APIs</Text>
          <APIItem
            name="Send lease invite"
            callback={() => navigation.navigate("AddressSearch")}
          />
          <APIItem
            name="Remove all lease tenants"
            callback={() => {
              listAllLeaseTenants().then(({ items }) => {
                items.forEach((itm) => {
                  console.log("delete", itm);
                  deleteLeaseTenantFromID(itm.id);
                });
              });
            }}
          />
          <APIItem
            name="Remove all lease landlords"
            callback={() => {
              listAllLeaseLandlords().then(({ items }) => {
                items.forEach((itm) => {
                  console.log("delete", itm);
                  deleteLeaseLandlordFromID(itm.id);
                });
              });
            }}
          />
          <APIItem
            name="Remove all lease terms"
            callback={() => {
              listAllLeaseTerms().then(({ items }) => {
                items.forEach((itm) => {
                  console.log(itm);
                  deleteLeaseTermFromID(itm.id);
                });
              });
            }}
          />
          <APIItem
            name="Create chat"
            callback={() => {
              navigation.navigate("CreateChat");
            }}
          />
          <APIItem
            name="Delete all chat"
            callback={() => {
              deleteAllChatRoomAndChatUser();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Debug;
/*
 */

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
