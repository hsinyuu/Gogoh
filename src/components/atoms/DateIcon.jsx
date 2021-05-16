import React from "react";
import { Text, Image, View } from "react-native";

const DateIcon = ({ date, day}) => {
  return (
    <View
      style={{
        backgroundColor: "#D2D6FA",
        width: 50,
        height: 50,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <Text style={{fontFamily:"Avenir-Heavy", color:"#102733", fontSize:17}}>{date}</Text>
        <Text style={{fontFamily:"Avenir-Heavy", color:"#102733", fontSize:12}}>{day}</Text>
    </View>
  );
};

export default DateIcon;
