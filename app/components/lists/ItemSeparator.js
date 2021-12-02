import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../configs/colors";

const ItemSeparator = ({ height = 2, bgColor = colors.light }) => {
  return (
    <View
      style={[styles.container, { height: height, backgroundColor: bgColor }]}
    />
  );
};

export default ItemSeparator;

const styles = StyleSheet.create({
  container: {
    height: 2,
    width: "100%",
    backgroundColor: colors.light,
  },
});
