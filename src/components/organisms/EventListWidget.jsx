import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import DateIcon from "atoms/DateIcon";
import EventItem from "molecules/EventItem";
import CardContainer from "atoms/CardContainer";

const EventListWidget = ({ title, subtitle, image }) => {
  return (
    <CardContainer
      shadowed={true}
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: 16,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ color: "#102733", fontFamily: "Avenir-Heavy", fontSize: 20, marginVertical: 30}}>Upcoming events</Text>
      </View>
      <EventItem title={"Finish move in inspection"} />
      <EventItem title={"Tell Garthy about your move in"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Text style={{fontFamily: "Avenir-Heavy", marginRight: 30, marginBottom:20}}>See more</Text>
        </TouchableOpacity>
      </View>
    </CardContainer>
  );
};

export default EventListWidget;
