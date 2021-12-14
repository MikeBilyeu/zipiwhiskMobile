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

import { videoChange } from "../../redux/actions/recipeForm";
import CamBtn from "./CamBtn";

const VideoEdit = (props) => {
  const [videoIndex, setVideoIndex] = useState(0);

  const handleDelete = () => {
    props.videoChange({
      video_urls: [
        ...props.recipeForm.video_urls.slice(0, videoIndex),
        ...props.recipeForm.video_urls.slice(videoIndex + 1),
      ],
    });
    if (props.recipeForm.video_urls.length == 1) {
      props.setRenderEdit(false);
    }
    if (videoIndex !== 0) {
      setVideoIndex(videoIndex - 1);
    }
  };

  const renderMiniPreview = (videos) => {
    return videos.map((url, index) => (
      <Pressable key={index} onPress={() => setVideoIndex(index)}>
        <Video
          source={{ uri: url }}
          style={[
            styles.miniPreview,
            { borderWidth: index === videoIndex && 2 },
          ]}
          resizeMode="cover"
          shouldPlay={false}
        />
      </Pressable>
    ));
  };

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
      <View style={styles.miniPreviewContainer}>
        {renderMiniPreview(props.recipeForm.video_urls)}
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.numText}>{`${videoIndex + 1}/${
          props.recipeForm.video_urls.length
        }`}</Text>

        <CamBtn
          onPress={handleDelete}
          styles={{
            bottom: hp("12%"),
            backgroundColor: "rgba(255,255,255,.7)",
            borderRadius: 100,
            paddingLeft: wp(".6%"),
          }}
          icon="ios-trash-outline"
          color="#000"
        />

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
    backgroundColor: "#000",
  },
  miniPreviewContainer: {
    paddingHorizontal: hp("2%"),
    backgroundColor: "rgba(0,0,0, .5)",
    position: "absolute",
    width: wp("100%"),
    height: hp("13%"),
    alignItems: "center",
    flexDirection: "row",
  },
  miniPreview: {
    width: wp("9%"),
    height: wp("14%"),
    borderColor: "white",
    borderRadius: wp("1%"),
    marginHorizontal: wp("1%"),
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp("13%"),
  },
  numText: {
    color: "#fff",
    fontSize: wp("3.5%"),
    fontSize: wp("4%"),
    fontFamily: "AvenirNextDemiBold",
    marginTop: hp("2%"),
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

export default connect(mapStateToProps, { videoChange })(VideoEdit);
