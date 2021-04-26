import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import AvatarImage from "atoms/AvatarImage";
import { getLeaseTermFromLeaseTermID } from "services/lease";

const LeaseParticipant = (props) => {
  const { firstName, lastName, avatarImage } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
      }}
    >
      <AvatarImage uri={avatarImage} size={50} />
      <Text style={{ fontSize: 20 }}>{`${firstName} ${lastName}`}</Text>
    </View>
  );
};

const Lease = ({ route }) => {
  useEffect(() => {
    getLeaseTermFromLeaseTermID(route.params.leaseTermID).then(
      (leaseTermData) => {
        console.log("data", leaseTermData);
        setLeaseTerm(leaseTermData);
      }
    );
  }, []);
  const [leaseTerm, setLeaseTerm] = useState(null);
  if (leaseTerm == null) {
    return <Text>loading</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>{`Address: ${leaseTerm.property.address}`}</Text>
        <Text style={styles.sectionText}>{`Start date: ${leaseTerm.termStartDate}`}</Text>
        <Text style={styles.sectionText}>{`End date: ${leaseTerm.termEndDate}`}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Landlord</Text>
        {leaseTerm.landlords.items.length == 0 ? (
          <Text>Pending landlord</Text>
        ) : (
          <Text>
            {`Landlords: ${leaseTerm.landlords.items[0].user.firstName} ${leaseTerm.landlords.items[0].user.lastName}`}
          </Text>
        )}
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Tenants</Text>
        {leaseTerm.tenants.items.length == 0 ? (
          <Text>Pending tenants</Text>
        ) : (
          <LeaseParticipant
            firstName={leaseTerm.tenants.items[0].user.firstName}
            lastName={leaseTerm.tenants.items[0].user.lastName}
            avatarImage={leaseTerm.tenants.items[0].user.avatarImage}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    height:"100%",
    width:"100%",
    backgroundColor: "white"
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 30,
  },
  sectionText: {
    fontSize: 20,
  },
};

export default Lease;
