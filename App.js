import React from "react";
import { StyleSheet } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";

export default function App() {
  // return (
  //   <View style={styles.appContainer}>
  //     <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
  //   </View>
  // );
  return <AccountScreen />
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
