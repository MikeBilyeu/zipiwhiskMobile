import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { selectIsMediaUrl } from "../../../redux/reducers/recipeFormReducer";

const CreateRecipeBtn = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(props.isMediaUrl ? "CreateRecipe" : "Camera")
      }
      hitSlop={{ top: 10, bottom: 10 }}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.createRecipeBtn,
      ]}
    >
      <Ionicons
        name="create-outline"
        size={wp("7%")}
        color="#313131"
        style={{ marginBottom: hp(".5%"), marginLeft: hp(".5%") }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  createRecipeBtn: {
    width: wp("15%"),
    height: wp("15%"),
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  isMediaUrl: selectIsMediaUrl(state),
});

export default connect(mapStateToProps)(CreateRecipeBtn);
