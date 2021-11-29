import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.listContainer}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
  },
  subTitle: {
    fontFamily: "500",
    color: colors.medium,
  },
});
