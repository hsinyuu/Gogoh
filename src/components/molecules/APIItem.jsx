import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const APIItem = (props) => {
  const { name, details, time, callback } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={callback}>
      <View style={styles.midContainer}>
        <Text style={styles.name}>{name}</Text>
        {details && <Text style={styles.details}>{details}</Text>}
        {time && <Text>{time}</Text>}
      </View>
    </TouchableOpacity>
  );
};

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
    marginHorizontal: 30
  },
  midContainer: {
    padding:20,
    flexDirection: "column",
  },
};

export default APIItem;
