import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import ChairImg from "../assets/chair.jpg";
import colors from "../configs/colors";

const ViewImageScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: colors.black }}>
      <View style={styles.container}>
        <View style={styles.controls}>
          <View style={styles.delete}></View>
          <View style={styles.close}></View>
        </View>
        <View style={styles.imgDisplaySec}>
          <Image source={ChairImg} style={styles.imgDisplay} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 10,
    left: 0,
    paddingLeft: 30,
    paddingRight: 30
  },
  imgDisplaySec: {
    flex: 1,
  },
  imgDisplay: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  delete: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  close: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
});
