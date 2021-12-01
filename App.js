import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return <Screen style={{backgroundColor: "white"}}>
    <AppTextInput placeholder="Email" iconName="email" />
  </Screen>
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: "#fffeee",
  },
});
