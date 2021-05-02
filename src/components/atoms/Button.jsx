import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  const { title, active, onPress} = props;
  return (
    <TouchableOpacity
      disabled={active}
      onPress={onPress}
      style={{
        padding: 20,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        borderWidth: 1,
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
