import React from "react";
import { View, TouchableOpacity } from "react-native";

const CardContainer = (props) => {
  const { onPress, shadowed, bordered, style } = props;
  const shadowStyle = shadowed
    ? {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 10,
      }
    : {};
  const borderStyle = bordered
    ? {
        borderWidth: 1,
      }
    : {};
  if (onPress != null) {
    return (
      <TouchableOpacity
        style={[styles.container, shadowStyle, borderStyle, style]}
        onPress={onPress}
      >
        {props.children}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, shadowStyle, borderStyle, style]}>
        {props.children}
      </View>
    );
  }
};

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "1%",
    marginTop: 20,
  },
};

export default CardContainer;
