import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BookmarksBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Bookmarks")}
      activeOpacity={0.5}
      style={styles.createRecipeBtn}
    >
      <Ionicons name="bookmarks-outline" size={25} color="black" />
      <Text>Bookmarks</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createRecipeBtn: {
    position: "absolute",
    right: 0,
    height: 40,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookmarksBtn;
