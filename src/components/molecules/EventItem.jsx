import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateIcon from "atoms/DateIcon";
import { FontAwesome } from "@expo/vector-icons";

const EventItem = (props) => {
  const { title, time, callback } = props;
  const Icon = props.icon;
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <DateIcon date={11} day={"Mon"} />
      <Text
        style={{
          marginLeft: 15,
          fontFamily: "Avenir-Medium",
          color: "#102733",
          fontSize: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
/*
    <TouchableOpacity style={styles.container} onPress={callback}>
      <View style={styles.leftContainer}>
        <FontAwesome name="address-book" size={40} color="#f15454" />
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.name}>{name}</Text>
        {details && <Text style={styles.details}>{details}</Text>}
        {time && <Text>{time}</Text>}
      </View>
    </TouchableOpacity>
    */

const styles = {
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: "#444444",
    fontWeight: "600",
    fontSize: 20,
  },
  details: {
    color: "grey",
    fontWeight: "400",
    fontSize: 15,
  },
  leftContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  midContainer: {
    marginTop: 20,
    flexDirection: "column",
  },
};

export default EventItem;
