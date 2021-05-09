import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
          <TouchableOpacity
            onPress={() => props.changeImage(null)}
            activeOpacity={0.4}
            style={[styles.btn, { right: 0 }]}
          >
            <Ionicons name="ios-close" size={wp("8%")} color="#FFF" />
          </TouchableOpacity>
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
    marginHorizontal: wp("5%"),
    marginVertical: hp("5%"),
  },
  imagePreview: {
    flex: 1,
    width: "100%",
  },
  btn: {
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nextBtn: {
    height: wp("13%"),
    width: wp("55%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(226,226,226,.8)",
    marginBottom: wp("5%"),
  },
  nextBtnText: {
    color: "white",
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextDemiBold",
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps, { changeImage })(RenderPreview);
