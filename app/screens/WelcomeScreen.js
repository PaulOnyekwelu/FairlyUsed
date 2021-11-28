import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import BackgroundImg from "../assets/background.jpg";
import LogoImg from "../assets/logo-red.png";
import colors from "../configs/colors";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={BackgroundImg}
      resizeMode="cover"
      style={styles.welcomeContainer}
    >
      <View style={styles.logoSection}>
        <Image source={LogoImg} style={styles.logoImage} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.signupButton}></View>
        <View style={styles.loginButton}></View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  signupButton: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  loginButton: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  buttonSection: {
    width: "100%",
    height: 150,
  },
  logoSection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 100
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    marginTop: 10,
  },
});
