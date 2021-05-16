import React from "react";
import { Text, Image, View } from "react-native";
import CardContainer from "atoms/CardContainer";

const ImageCard = ({ title, subtitle, image }) => {
  const onPress = () => {
    console.log("Implement this");
  }
  return (
    <CardContainer onPress={onPress} shadowed={true} style={{ flexDirection: "column" }}>
      <Image style={{ height: 250, width: "70%" }} source={image} />
      <View style={{ flexDirection:'column', alignItems:'center', marginVertical: 20 }}>
        <Text
          style={{
            fontFamily: "Avenir-Heavy",
            fontSize: 14,
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              marginTop: 5,
              fontFamily: "Avenir-Heavy",
              fontSize: 14,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </CardContainer>
  );
};

export default ImageCard;