import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getLeaseTermHistoryFromUserID } from "services/lease";
import { UserContext } from "../../context/UserContext";
import LeaseTermItem from "molecules/LeaseTermItem";

const LeaseHistory = () => {
  const userContext = React.useContext(UserContext);
  const [leaseTenantHistory, setLeaseTenantHistory] = useState([]);
  const [leaseLandlordHistory, setLeaseLandlordHistory] = useState([]); // May want support for landlord and tenant mix
  useEffect(() => {
    getLeaseTermHistoryFromUserID(userContext.id).then((data) => {
      if (userContext.userRole == "Tenant") {
        setLeaseTenantHistory(data.leaseTenantHistory.items);
      } else if (userContext.userRole == "Landlord") {
        setLeaseTenantHistory(data.leaseLandlordHistory.items);
      }
    });
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <FlatList
        data={leaseTenantHistory}
        renderItem={({ item }) => (
          <LeaseTermItem
            propertyAddress={item.leaseTerm.property.address}
            termStartDate={item.leaseTerm.termStartDate}
            termEndDate={item.leaseTerm.termEndDate}
            leaseTermID={item.leaseTerm.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default LeaseHistory;
