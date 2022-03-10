import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Text,
  Pressable,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  captionChange,
  recipeNameChange,
  servingsChange,
  ingredientsChange,
  instructionsChange,
  categoriesChange,
  submitRecipe,
} from "../../redux/actions/recipeForm";

import ScreenHeader from "../ScreenHeader";
import MediaInput from "./MediaInput";
import Input from "./Input";
import Categories from "./Categories";

const CreateRecipeScreen = (props) => {
  const [inputFocused, setInputFocused] = useState();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
        <ScreenHeader
          title="Create Recipe"
          subTitle="Recipe Info"
          goBackScreen="Home"
        >
          {inputFocused ? (
            <Pressable
              style={({ pressed }) => [
                styles.headerBtn,
                { opacity: pressed ? 0.5 : 1 },
              ]}
              onPress={() => {
                setInputFocused(false);
                Keyboard.dismiss();
              }}
            >
              <Text style={styles.headerBtnText}>Done</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => props.submitRecipe}
              style={({ pressed }) => [
                styles.headerBtn,
                { opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <Text style={styles.headerBtnText}>Post</Text>
            </Pressable>
          )}
        </ScreenHeader>
        <ScrollView
          style={styles.listContainer}
          contentContainerStyle={{ paddingTop: hp("11%") }}
        >
          <View style={styles.captionContainer}>
            <MediaInput />
            <Input
              placeholder="Add a caption..."
              returnKeyType="next"
              value={props.recipeForm.caption}
              setValue={props.captionChange}
              multiline={true}
              onFocus={() => setInputFocused(true)}
              captionInput={true}
            />
          </View>

          <Input
            name="Recipe Name"
            placeholder="Add a recipe name..."
            returnKeyType="next"
            value={props.recipeForm.recipe_name}
            setValue={props.recipeNameChange}
            onFocus={() => setInputFocused(true)}
          />
          <Input
            name="Servings"
            placeholder="Add # servings..."
            keyboardType="number-pad"
            value={props.recipeForm.servings}
            setValue={props.servingsChange}
            onFocus={() => setInputFocused(true)}
            maxLength={2}
          />
          <Input
            name="Ingredients"
            placeholder="Add ingredients..."
            info="(one ingredient per line)"
            returnKeyType={null}
            value={props.recipeForm.ingredients}
            setValue={props.ingredientsChange}
            multiline={true}
            onFocus={() => setInputFocused(true)}
          />
          <Input
            name="Instructions"
            placeholder="Add instructions..."
            returnKeyType={null}
            value={props.recipeForm.instructions}
            setValue={props.instructionsChange}
            multiline={true}
            onFocus={() => setInputFocused(true)}
          />
          <Categories
            value={props.recipeForm.categories}
            setValue={props.categoriesChange}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerBtn: {
    height: hp("7%"),
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  headerBtnText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    color: "#0172C4",
  },
  captionContainer: {
    flexDirection: "row",
    borderBottomWidth: 0.25,
    borderColor: "#E3E3E3",
    marginVertical: hp(".5%"),
  },
  listContainer: {
    flex: 1,
    position: "absolute",
    top: hp("5%"),
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

const mapDispatchToProps = {
  captionChange,
  recipeNameChange,
  servingsChange,
  ingredientsChange,
  instructionsChange,
  categoriesChange,
  submitRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeScreen);
