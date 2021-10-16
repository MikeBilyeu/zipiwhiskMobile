import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const CreateRecipeBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("CreateRecipe")}
      hitSlop={15}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.createRecipeBtn,
      ]}
    >
      <Image
        style={{ width: wp("7%"), height: wp("7%") }}
        source={require("../../../assets/createRecipe.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  createRecipeBtn: {
    height: wp("12%"),
    width: wp("12%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateRecipeBtn;
