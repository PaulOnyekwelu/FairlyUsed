import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configs/colors";
import AppText from "./AppText";

const LinkItem = ({ title, iconName, color, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <MaterialCommunityIcons name={iconName} color="white" size={20} />
      </View>
      <View style={styles.textSection}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </View>
  );
};

export default LinkItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600" 
  },
  textSection: {
    justifyContent: "center",
    paddingLeft: 10
  }
});
