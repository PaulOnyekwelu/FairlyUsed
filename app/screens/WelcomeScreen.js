import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import BackgroundImg from "../assets/background.jpg";
import LogoImg from "../assets/logo-red.png";

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeContainer}>
      <ImageBackground
        source={BackgroundImg}
        resizeMode="cover"
        style={styles.bgImage}
      />
      <View style={styles.section}>
        <View style={styles.logoSection}>
          <Image source={LogoImg} style={styles.logoImage} />
          <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonSection}>
          <View style={styles.signupButton}></View>
          <View style={styles.loginButton}></View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
  },
  section: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  signupButton: {
    flex: 1,
    backgroundColor: "tomato",
  },
  loginButton: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  buttonSection: {
    width: "100%",
    height: 150,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 1,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  logoSection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  logoImage: {
    width: 100,
    height: 100
  },
  logoText: {
    marginTop: 10
  }
});
