import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ItemSeparator from "../components/ItemSeparator";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const data = [
  {
    id: 1,
    title: "first",
    description: "this is first message",
    image: require("../assets/user.jpg"),
  },
  {
    id: 2,
    title: "second",
    description: "this is second message",
    image: require("../assets/user.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ListItem
                image={item.image}
                title={item.title}
                subTitle={item.description}
              />
            );
          }}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
