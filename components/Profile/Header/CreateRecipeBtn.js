import React from "react";
import { Pressable, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const CreateRecipeBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("CreateRecipe")}
      hitSlop={28}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.createRecipeBtn,
      ]}
    >
      <Ionicons
        name="create-outline"
        size={wp("8%")}
        color="#313131"
        style={{ marginBottom: hp(".5%"), marginLeft: hp(".5%") }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  createRecipeBtn: {
    width: wp("12%"),
    height: wp("12%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateRecipeBtn;
