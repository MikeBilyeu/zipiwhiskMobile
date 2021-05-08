import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
        style={{ width: wp("8%"), height: wp("8%") }}
        source={require("../../../assets/createRecipe.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createRecipeBtn: {
    height: wp("20%"),
    width: wp("20%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateRecipeBtn;
