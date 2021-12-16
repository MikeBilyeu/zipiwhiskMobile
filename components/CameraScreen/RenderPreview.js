import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  ImageBackground,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as MediaLibrary from "expo-media-library";

import { imageChange, videoChange } from "../../redux/actions/recipeForm";

const RenderPreview = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <StatusBar hidden />
      {props.recipeForm.media_type === "image" ? (
        <ImageBackground
          source={{ uri: props.recipeForm.image_url }}
          style={styles.preview}
        />
      ) : (
        <Video
          source={{ uri: props.recipeForm.video_urls[0] }}
          style={styles.preview}
          resizeMode="cover"
          isLooping
          shouldPlay
        />
      )}
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            props.setRenderPreview(false);
            if (props.recipeForm.media_type === "image") {
              props.imageChange({ image_url: "" });
            }
          }}
          style={({ pressed }) => [
            styles.btn,
            { left: 0, opacity: pressed ? 0.5 : 1 },
          ]}
          hitSlop={25}
        >
          <Ionicons
            name={
              props.recipeForm.media_type === "image"
                ? "ios-close"
                : "chevron-back"
            }
            size={wp("6.5%")}
            color="#FFF"
          />
        </Pressable>
        <Pressable
          onPress={async () => {
            await MediaLibrary.saveToLibraryAsync(
              props.recipeForm.media_type === "image"
                ? props.recipeForm.image_url
                : props.recipeForm.video_urls[0]
            );
          }}
          hitSlop={25}
          style={({ pressed }) => [styles.btn, { right: null, left: null }]}
        >
          <Ionicons name="download-outline" size={wp("6.5%")} color="#FFF" />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            styles.nextBtn,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("CreateRecipe")}
          hitSlop={25}
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
  },
  preview: {
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
  },
  nextBtn: {
    height: wp("10%"),
    width: wp("30%"),
    right: wp("3%"),
    bottom: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(0,0,0,.9)",
  },
  nextBtnText: {
    color: "white",
    fontSize: wp("4%"),
    fontFamily: "AvenirNextDemiBold",
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps, { imageChange, videoChange })(
  RenderPreview
);
