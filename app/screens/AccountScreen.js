import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ItemSeparator from "../components/ItemSeparator";
import LinkItem from "../components/LinkItem";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import colors from "../configs/colors";

const linkOptions = [
  {
    id: 1,
    title: "My Listings",
    iconName: "format-list-bulleted",
    bgColor: colors.primary,
  },
  {
    id: 2,
    title: "My Messages",
    iconName: "email",
    bgColor: colors.secondary,
  },
  {
    id: 3,
    title: "Log Out",
    iconName: "logout",
    bgColor: "#ffe66d",
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.user}>
        <ListItem
          image={require("../assets/user.jpg")}
          title="Paul Silanka"
          subTitle="silanka007@gmail.com"
        />
      </View>
      <View>
        <FlatList
          data={linkOptions}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => console.log(item)}>
                <LinkItem
                  {...item}
                  style={{ marginTop: item.title === "Log Out" ? 20 : 0 }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  user: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    marginVertical: 20,
    marginBottom: 40,
  },
});
