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
    console.log(onPress)
    if (onPress != null) onPress();
    if (navigateTo != null) navigation.navigate(navigateTo);
  }
  return (
    <TouchableOpacity style={styles.container} onPress={runCallbackAndNavigate}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>{Icon}</View>
        <Text style={styles.name}>{name}</Text>
      </View>
      {navigateTo && (
        <AntDesign
          style={{ margin: 20, color: '#444444'}}
          name="right"
          size={20}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    //borderTopWidth: 0.5,
    //borderColor: "grey",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    color: '#444444'
  },
  name: {
    fontSize: 20,
    color: '#444444'
  },
};

export default OptionItem;
