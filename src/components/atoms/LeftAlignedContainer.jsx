
import React from "react";
import { View, Text } from "react-native";

const LeftAlignedContainer = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      {props.children}
    </View>
  );
};

export default LeftAlignedContainer;