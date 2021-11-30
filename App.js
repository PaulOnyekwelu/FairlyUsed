import React from "react";
import { StyleSheet } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return <ListingScreen />
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
