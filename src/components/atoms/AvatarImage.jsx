import React from "react";
import { Image, View } from "react-native";

const AvatarImage = (props) => {
  const { uri, size, shadowed } = props;
  const shadowStyle = shadowed
    ? {
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.10,
        shadowRadius: 8,
      }
    : {};
  console.log(shadowed, shadowStyle);
  return (
    <View style={shadowStyle}>
      <Image
        source={{ uri }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 3,
        }}
      ></Image>
    </View>
  );
};

export default AvatarImage;
