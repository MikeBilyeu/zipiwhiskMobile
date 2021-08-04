import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { connect } from "react-redux";

import {
  changeMedia,
  recipeNameChange,
  servingsChange,
  ingredientsChange,
  instructionsChange,
  timeHrChange,
  timeMinChange,
  keywordsChange,
  categoriesChange,
  submitRecipe,
} from "../../redux/actions/recipeForm";

import ScreenHeader from "../ScreenHeader";
import MediaInput from "./MediaInput";
import Input from "./Input";
import TimeInput from "./TimeInput";
import Categories from "./Categories";

const CreateRecipeScreen = (props) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <ScreenHeader title="Create Recipe" subTitle="Recipe Info">
          <TouchableOpacity
            onPress={props.submitRecipe}
            activeOpacity={0.4}
            style={styles.headerBtn}
          >
            <Text style={styles.postText}>Post</Text>
          </TouchableOpacity>
        </ScreenHeader>
        <ScrollView style={styles.listContainer}>
          <MediaInput
            media_url={props.recipeForm.media_url}
            media_type={props.recipeForm.media_type}
            handleOnChange={props.changeMedia}
          />
          <Input
            name="Recipe Name"
            placeholder="Add a recipe name..."
            returnKeyType="next"
            value={props.recipeForm.recipe_name}
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
            multiline={true}
          />
          <Input
            name="Instructions"
            placeholder="Add instructions..."
            returnKeyType={null}
            value={props.recipeForm.instructions}
            setValue={props.instructionsChange}
            multiline={true}
          />
          <TimeInput
            name="Total Time"
            placeholder="00"
            keyboardType="number-pad"
            returnKeyType="done"
            value={props.recipeForm.totalTime}
            timeHrChange={props.timeHrChange}
            timeMinChange={props.timeMinChange}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerBtn: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  postText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 18,
    color: "#0172C4",
  },
  image: {
    backgroundColor: "#F2F2F2",
    width: 300,
    height: 175,
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
  },
  cameraIconContainer: {
    justifyContent: "center",
    alignItems: "center",
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
  changeMedia,
  recipeNameChange,
  servingsChange,
  ingredientsChange,
  instructionsChange,
  timeHrChange,
  timeMinChange,
  keywordsChange,
  categoriesChange,
  submitRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeScreen);
