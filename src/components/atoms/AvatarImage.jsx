import React from "react";
import { Image } from "react-native";

const AvatarImage = (props) => {
  const { uri } = props;
  return (
    <Image
      source={{ uri }}
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10,
      }}
    ></Image>
  );
};

export default AvatarImage;