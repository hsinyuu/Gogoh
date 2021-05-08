import React from "react";
import { TouchableOpacity } from "react-native";

const TouchableContainer = (props) => {
  const { onPress, shadowed, bordered, style } = props;
  const shadowStyle = shadowed
    ? {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
    : {};
  const borderStyle = bordered
    ? {
        borderWidth: 1,
      }
    : {};

  return (
    <TouchableOpacity style={[styles.container, shadowStyle, borderStyle, style]} onPress={onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "5%",
    marginTop: 20,
  },
};

export default TouchableContainer;
