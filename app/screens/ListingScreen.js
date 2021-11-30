import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import ItemSeparator from "../components/ItemSeparator";
import Screen from "../components/Screen";
import colors from "../configs/colors";

const data = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "$1000",
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.cardSection}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Card
                title={item.title}
                subTitle={item.price}
                image={item.image}
              />
            );
          }}
          ItemSeparatorComponent={() => <ItemSeparator height={20} />}
        />
      </View>
    </Screen>
  );
};

export default ListingScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  cardSection: {
    flex: 1,
    padding: 20,
  },
});
