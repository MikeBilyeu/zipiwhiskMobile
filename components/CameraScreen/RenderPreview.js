import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import { changeMedia } from "../../redux/actions/recipeForm";

const RenderPreview = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {props.recipeForm.media_type === "image" ? (
        <ImageBackground
          source={{ uri: props.recipeForm.media_url }}
          style={styles.preview}
        />
      ) : (
        <Video
          source={{ uri: props.recipeForm.media_url }}
          style={styles.preview}
          resizeMode="cover"
          isLooping
          shouldPlay
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() =>
            props.changeMedia({ media_url: null, media_type: null })
          }
          activeOpacity={0.4}
          style={[styles.btn, { left: 0 }]}
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
  preview: {
    flex: 1,
    width: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  btn: {
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: 50,
  },
  nextBtn: {
    height: wp("13%"),
    width: wp("75%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(0,0,0,.5)",
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

export default connect(mapStateToProps, { changeMedia })(RenderPreview);
