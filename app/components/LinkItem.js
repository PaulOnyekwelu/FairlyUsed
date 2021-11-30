import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";
import AppIcon from "./AppIcon";

const LinkItem = ({ title, iconName, bgColor, style }) => {
  return (
    <View style={[styles.container, style]}>
      <AppIcon iconName={iconName} bgColor={bgColor} />
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
  text: {
    fontWeight: "600",
  },
  textSection: {
    justifyContent: "center",
    paddingLeft: 10,
  },
});
