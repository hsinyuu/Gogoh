
import React from "react";
import { View, Text } from "react-native";

const RightAlignedContainer = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      {props.children}
    </View>
  );
};

export default RightAlignedContainer;
