import React from "react";
import moment from "moment";
import { Text } from "react-native";
import CardContainer from "atoms/CardContainer";
import { useNavigation } from "@react-navigation/native";

const LeaseTermItem = (props) => {
  const { propertyAddress, termStartDate, termEndDate, leaseTermID } = props;
  const navigation = useNavigation();
  return (
    <CardContainer
      style={{ height: 100 }}
      shadowed={true}
      onPress={() => navigation.navigate("Lease", { leaseTermID: leaseTermID })}
    >
      <Text style={styles.header}>{propertyAddress}</Text>
      <Text style={styles.subheader}>
        {`${moment(termStartDate).format("MMM YYYY")} - ${moment(
          termEndDate
        ).format("MMM YYYY")}`}
      </Text>
      <Text></Text>
    </CardContainer>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "center",
    height: 150,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "5%",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 5,
  },
  subheader: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
};

export default LeaseTermItem;
