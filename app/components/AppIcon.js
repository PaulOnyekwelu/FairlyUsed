import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({
  size = 40,
  color = "white",
  bgColor = "black",
  iconName = "email",
}) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        height: size,
        width: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={iconName} color={color} size={size / 2} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
