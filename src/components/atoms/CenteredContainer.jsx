import React from "react";
import { View, Text } from "react-native";

const CenteredContainer = (props) => {
  return (
    <View
      style={[{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }, props.style]}
    >
      {props.children}
    </View>
  );
};

export default CenteredContainer;
