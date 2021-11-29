import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageBg} source={image} />
      <View style={styles.textSection}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
  },
  imageBg: {
    height: 200,
    width: "100%",
  },
  textSection: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 10,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 24,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
