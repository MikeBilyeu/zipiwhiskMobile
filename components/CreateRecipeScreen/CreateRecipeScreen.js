import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import ScreenHeader from "../ScreenHeader";
import Input from "./Input";
import Categories from "./Categories";

const CreateRecipeScreen = ({ recipeForm }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <ScreenHeader title="Create Recipe" subTitle="Recipe Info" />
        <ScrollView style={styles.listContainer}>
          <TouchableOpacity
            style={{ borderBottomWidth: 0.5, borderColor: "#E3E3E3" }}
            onPress={() => navigation.navigate("Camera")}
          >
            <Image
              source={{ uri: recipeForm.imagePath }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Input name="Recipe Name" placeholder="Add a recipe name..." />
          <Input
            name="Servings"
            placeholder="Add # servings..."
            keyboardType="number-pad"
            returnKeyType="done"
          />
          <Input
            name="Ingredients"
            placeholder="Add ingredients..."
            info="(one ingredient per line)"
          />
          <Input
            name="Instructions"
            placeholder="Add instructions..."
            info="(one step per paragraph)"
          />
          <Input name="Total Time" placeholder="Add total time..." />
          <Input
            name="Keywords"
            placeholder="Add keywords..."
            info="(separate with comma)"
          />
          <Categories />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    backgroundColor: "#F2F2F2",
    width: 300,
    height: 175,
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
  },
  listContainer: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps)(CreateRecipeScreen);
