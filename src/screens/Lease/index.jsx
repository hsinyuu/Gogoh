import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import AvatarImage from "atoms/AvatarImage";
import Button from "atoms/Button";
import CenteredContainer from "atoms/CenteredContainer";
import {
  getLeaseTermFromLeaseTermID,
  changeLeaseUserStatus,
  changeLeaseTermStatus,
} from "services/lease";
import { UserContext } from "../../context/UserContext";
import { MaterialIcons } from "@expo/vector-icons";

const LeaseParticipantStatusIcon = (props) => {
  const { status } = props;
  if (status == "INVITED") {
    return <MaterialIcons name="pending" size={30} color="black" />;
  } else if (status == "DECLINED") {
    return <MaterialIcons name="cancel" size={30} color="red" />;
  } else if (status == "JOINED") {
    return <MaterialIcons name="preview" size={30} color="black" />;
  } else if (status == "DONE_REVIEW") {
    return (
      <MaterialIcons name="check-circle-outline" size={24} color="black" />
    );
  }
};

const LeaseParticipant = (props) => {
  const { firstName, lastName, avatarImage, status } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AvatarImage uri={avatarImage} size={50} />
        <Text style={{ fontSize: 20 }}>{`${firstName} ${lastName}`}</Text>
      </View>
      <LeaseParticipantStatusIcon status={status} />
    </View>
  );
};

const allPartiesDoneReview = (leaseTerm) => {
  const allLandlordsDoneReview =
    leaseTerm.landlords.items.filter(
      (leaseUser) => leaseUser.status != "DONE_REVIEW"
    ).length == 0;
  const allTenantsDoneReview =
    leaseTerm.tenants.items.filter(
      (leaseUser) => leaseUser.status != "DONE_REVIEW"
    ).length == 0;
  return allLandlordsDoneReview && allTenantsDoneReview;
};

const LeaseUserAction = (props) => {
  const userContext = React.useContext(UserContext);
  const { leaseUser, leaseTerm, setReloadLeaseTerm } = props;
  const status = leaseUser.status;
  if (status == "INVITED") {
    return (
      <CenteredContainer>
        <Button
          title={"Join"}
          onPress={() => {
            changeLeaseUserStatus(leaseUser, userContext.userRole, "JOINED")
              .then((data) => setReloadLeaseTerm(true))
              .catch((error) => console.error(error));
          }}
        />
      </CenteredContainer>
    );
  } else if (status == "JOINED") {
    return (
      <CenteredContainer>
        <Button
          title={"Done review"}
          onPress={() => {
            changeLeaseUserStatus(
              leaseUser,
              userContext.userRole,
              "DONE_REVIEW"
            )
              .then((data) => setReloadLeaseTerm(true))
              .catch((error) => console.error(error));
          }}
        />
      </CenteredContainer>
    );
  } else if (status == "DONE_REVIEW") {
    if (allPartiesDoneReview(leaseTerm)) {
      return (
        <CenteredContainer>
          <Button
            title={"Finish review process"}
            onPress={() => {
              changeLeaseTermStatus(leaseTerm.id, "REVIEWED");
            }}
          />
        </CenteredContainer>
      );
    }
    return (
      <CenteredContainer>
        <Button
          title={"Waiting for others to finish reviewing"}
          active={false}
        />
      </CenteredContainer>
    );
  }
};

const getLeaseUserInLeaseTermFromUserContext = (userContext, leaseTerm) => {
  let leaseUser = null;
  if (userContext.userRole == "Landlord") {
    leaseUser = leaseTerm.landlords.items.filter(
      (leaseUser) => leaseUser.userID == userContext.id
    );
  }
  if (userContext.userRole == "Tenant") {
    leaseUser = leaseTerm.tenants.items.filter(
      (leaseUser) => leaseUser.userID == userContext.id
    );
  }
  if (leaseUser == null || !leaseUser.length == 1) {
    console.error(
      "user not found in lease term or multiple user found " + leaseUser
    );
    return null;
  }
  return leaseUser[0];
};

const Lease = ({ route }) => {
  const userContext = React.useContext(UserContext);
  const [leaseUser, setLeaseUser] = useState(null);
  const [leaseTerm, setLeaseTerm] = useState(null);
  const [reloadLeaseTerm, setReloadLeaseTerm] = useState(false);

  useEffect(() => {
    getLeaseTermFromLeaseTermID(route.params.leaseTermID).then(
      (leaseTermData) => {
        if (leaseTermData == null) {
          console.error("No lease term found from id");
        }
        console.log("data", leaseTermData);
        setLeaseTerm(leaseTermData);
        setLeaseUser(
          getLeaseUserInLeaseTermFromUserContext(userContext, leaseTermData)
        );
      }
    );
  }, [reloadLeaseTerm]);

  if (leaseTerm == null || leaseUser == null) {
    return <Text>loading</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text
          style={styles.sectionText}
        >{`Address: ${leaseTerm.property.address}`}</Text>
        <Text
          style={styles.sectionText}
        >{`Start date: ${leaseTerm.termStartDate}`}</Text>
        <Text
          style={styles.sectionText}
        >{`End date: ${leaseTerm.termEndDate}`}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Landlord</Text>
        {leaseTerm.landlords.items.length == 0 ? (
          <Text>Pending landlord</Text>
        ) : (
          <LeaseParticipant
            firstName={leaseTerm.landlords.items[0].user.firstName}
            lastName={leaseTerm.landlords.items[0].user.lastName}
            avatarImage={leaseTerm.landlords.items[0].user.avatarImage}
            status={leaseTerm.landlords.items[0].status}
          />
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
            status={leaseTerm.tenants.items[0].status}
          />
        )}
      </View>
      <LeaseUserAction
        leaseTerm={leaseTerm}
        leaseUser={leaseUser}
        setReloadLeaseTerm={setReloadLeaseTerm}
      />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
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
