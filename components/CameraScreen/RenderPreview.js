import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { changeImage } from "../../redux/actions/recipeForm";

const RenderPreview = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={{ uri: props.recipeForm.imagePath }}
        style={styles.imagePreview}
      >
        <View style={styles.buttonContainer}>
          <Ionicons
            onPress={() => props.changeImage(null)}
            name="ios-close"
            size={30}
            color="#FFF"
            style={[styles.closeBtn, { right: 0 }]}
          />
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("CreateRecipe")}
          >
            <Text style={styles.nextBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  imagePreview: {
    flex: 1,
    width: "100%",
  },
  closeBtn: {
    position: "absolute",
  },
  nextBtn: {
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(226,226,226,.8)",
    marginBottom: 20,
  },
  nextBtnText: {
    color: "white",
    fontSize: 20,
    fontFamily: "AvenirNextDemiBold",
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps, { changeImage })(RenderPreview);
