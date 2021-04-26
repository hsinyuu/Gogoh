import React from "react";
import { Image } from "react-native";

const AvatarImage = (props) => {
  const { uri, size } = props;
  return (
    <Image
      source={{ uri }}
      style={{
        width: size,
        height: size,
        borderRadius: size/2,
        margin: 10,
      }}
    ></Image>
  );
};

export default AvatarImage;