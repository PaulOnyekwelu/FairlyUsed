import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../configs/colors";

const ListingDetailScreen = () => {
  return (
    <View style={styles.detailContainer}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.textSection}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem image={require("../assets/user.jpg")} title="Paul Silanka" subTitle="5 listings" />
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  detailContainer: {},
  image: {
    width: "100%",
    height: 300,
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
  userContainer: {
    marginVertical: 40
  }
});
