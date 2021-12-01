import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";

const AppTextInput = ({ iconName, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput {...otherProps} style={styles.input} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  input: {
    color: colors.medium,
    flex: 1
  },
  icon: {
    paddingRight: 10,
  },
});
