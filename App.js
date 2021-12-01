import React, {useState} from "react";
import { StyleSheet } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const data = [
  { label: "Clothing", value: "clothing" },
  { label: "Furnitures", value: "furnitures" },
  { label: "Linens", value: "linens" },
  { label: "Kits", value: "kits" },
];

export default function App() {
  const [category, setCategory] = useState(data[0])

  return (
    <Screen style={{ backgroundColor: "white" }}>
      <AppTextInput placeholder="Email" iconName="email" />
      <AppPicker iconName="apps" data={data} selectedItem={category} setSelectedItem={setCategory} />
    </Screen>
  );
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
