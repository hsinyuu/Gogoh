import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OptionItem = (props) => {
  const navigation = useNavigation();
  const { name, navigateTo, onPress } = props;
  const Icon = props.icon;
  const runCallbackAndNavigate = () => {
    if (onPress != null) onPress();
    if (navigateTo != null) navigation.navigate(navigateTo);
  }
  return (
    <TouchableOpacity style={styles.container} onPress={runCallbackAndNavigate}>
        <Text style={styles.name}>{name}</Text>
        {Icon}
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontFamily:"Avenir-Heavy",
    color: '#444444'
  },
};

export default OptionItem;
