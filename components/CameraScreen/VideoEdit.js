import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { connect } from "react-redux";
import * as MediaLibrary from "expo-media-library";

import { imageChange, videoChange } from "../../redux/actions/recipeForm";

const VideoEdit = (props) => {
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Video
        source={{ uri: props.recipeForm.video_urls[videoIndex] }}
        style={styles.preview}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            styles.doneBtn,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => props.setRenderEdit(false)}
          hitSlop={25}
        >
          <Text style={styles.doneBtnText}>Done</Text>
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
  doneBtn: {
    height: wp("10%"),
    width: wp("30%"),
    right: wp("3%"),
    bottom: hp("2%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    alignSelf: "flex-end",
    backgroundColor: "rgba(255,255,255,.9)",
  },
  doneBtnText: {
    color: "black",
    fontSize: wp("4%"),
    fontFamily: "AvenirNextDemiBold",
  },
});

const mapStateToProps = (state) => ({
  recipeForm: state.recipeForm,
});

export default connect(mapStateToProps, { imageChange, videoChange })(
  VideoEdit
);
