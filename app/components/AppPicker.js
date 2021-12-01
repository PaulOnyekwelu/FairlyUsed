import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../configs/colors";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
import ItemSeparator from "./ItemSeparator";

const AppPicker = ({ data, selectedItem, setSelectedItem, iconName }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpenModal(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{selectedItem.label}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      {openModal && (
        <Modal animationType="slide" visible={openModal}>
          <Screen>
            <Button onPress={() => setOpenModal(false)} title="close" />
            <FlatList
              data={data}
              keyExtractor={item => item.value}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedItem(item);
                      setOpenModal(false);
                    }}
                  >
                    <AppText style={styles.pickItem}>{item.label}</AppText>
                  </TouchableOpacity>
                );
              }}
              ItemSeparatorComponent={ItemSeparator}
            />
          </Screen>
        </Modal>
      )}
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  text: {
    color: colors.medium,
    flex: 1,
  },
  icon: {
    paddingRight: 10,
  },
  pickItem: {
    color: colors.medium,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: colors.medium,
  },
});
