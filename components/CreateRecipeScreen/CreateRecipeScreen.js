import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import ScreenHeader from "../ScreenHeader";
import Input from "./Input";
import Categories from "./Categories";

function CreateRecipeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <ScreenHeader title="Create Recipe" subTitle="Recipe Info" />
        <ScrollView style={styles.listContainer}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listContainer: {
    flex: 1,
  },
});

export default CreateRecipeScreen;
