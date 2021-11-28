import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";

const AppButton = ({ onPress, title, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 18,
    color: colors.white,
  },
});
