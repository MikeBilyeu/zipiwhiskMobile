import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateRecipeBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CreateRecipe")}
      activeOpacity={0.5}
      style={styles.createRecipeBtn}
    >
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../../assets/createRecipe.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createRecipeBtn: {
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateRecipeBtn;
