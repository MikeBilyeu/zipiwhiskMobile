import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
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
        <Pressable
          onPress={() =>
            props.changeMedia({ media_url: null, media_type: null })
          }
          style={({ pressed }) => [
            styles.btn,
            { left: 0, opacity: pressed ? 0.5 : 1 },
          ]}
          hitSlop={25}
        >
          <Ionicons name="ios-close" size={wp("6.5%")} color="#FFF" />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.nextBtn,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("CreateRecipe")}
          hitSlop={25}
        >
          <Text style={styles.nextBtnText}>Continue</Text>
        </Pressable>
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
    marginHorizontal: wp("3%"),
    marginVertical: hp("3%"),
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
    backgroundColor: "rgba(0,0,0,.3)",
    borderRadius: 50,
  },
  nextBtn: {
    height: wp("13%"),
    width: wp("75%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(0,0,0,.3)",
    marginBottom: wp("4%"),
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
