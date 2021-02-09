import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import {
  recipeNameChange,
  servingsChange,
  ingredientsChange,
  instructionsChange,
  totalTimeChange,
  keywordsChange,
  categoriesChange,
} from "../../redux/actions/recipeForm";

import ScreenHeader from "../ScreenHeader";
import Input from "./Input";
import Categories from "./Categories";

const CreateRecipeScreen = (props) => {
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
              source={{ uri: props.recipeForm.imagePath }}
              style={styles.image}
            />
          </TouchableOpacity>
          <Input
            name="Recipe Name"
            placeholder="Add a recipe name..."
            value={props.recipeForm.recipeName}
            setValue={props.recipeNameChange}
          />
          <Input
            name="Servings"
            placeholder="Add # servings..."
            keyboardType="number-pad"
            returnKeyType="done"
            value={props.recipeForm.servings}
            setValue={props.servingsChange}
          />
          <Input
            name="Ingredients"
            placeholder="Add ingredients..."
            info="(one ingredient per line)"
            returnKeyType={null}
            value={props.recipeForm.ingredients}
            setValue={props.ingredientsChange}
          />
          <Input
            name="Instructions"
            placeholder="Add instructions..."
            info="(one step per paragraph)"
            returnKeyType={null}
            value={props.recipeForm.instructions}
            setValue={props.instructionsChange}
          />
          <Input
            name="Total Time"
            placeholder="Add total time..."
            value={props.recipeForm.totalTime}
            setValue={props.totalTimeChange}
          />
          <Input
            name="Keywords"
            placeholder="Add keywords..."
            info="(separate with comma)"
            value={props.recipeForm.keywords}
            setValue={props.keywordsChange}
          />
          <Categories
            value={props.recipeForm.categories}
            setValue={props.categoriesChange}
          />
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

const mapDispatchToProps = {
  recipeNameChange,
  servingsChange,
  ingredientsChange,
  instructionsChange,
  totalTimeChange,
  keywordsChange,
  categoriesChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeScreen);
