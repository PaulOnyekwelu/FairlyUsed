import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ItemDeleteAction from "../components/ItemDeleteAction";
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
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ListItem
              image={item.image}
              title={item.title}
              subTitle={item.description}
              onPress={() => console.log(item)}
              renderRightActions={() => (
                <ItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          console.log("Messages screen refreshed...")
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
