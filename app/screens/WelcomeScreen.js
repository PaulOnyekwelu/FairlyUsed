import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import BackgroundImg from "../assets/background.jpg";
import LogoImg from "../assets/logo-red.png";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={BackgroundImg}
      resizeMode="cover"
      style={styles.welcomeContainer}
    >
      <View style={styles.logoSection}>
        <Image source={LogoImg} style={styles.logoImage} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonSection}>
        <AppButton title="Login" onPress={() => console.log("login button")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("register button")}
        />
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
  buttonSection: {
    width: "100%",
    height: 150,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  logoSection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  tagline: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 20
  },
});
