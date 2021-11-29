import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // return (
  //   <View style={styles.appContainer}>
  //     <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
  //   </View>
  // );
  return <ListingDetailScreen />
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
