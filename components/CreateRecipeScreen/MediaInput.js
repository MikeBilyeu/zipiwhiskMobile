import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { connect } from "react-redux";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MediaInput = (props) => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Camera");
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
      ]}
      onPress={handleOnPress}
      hitSlop={25}
    >
      {props.recipeForm.media_type === "image" ? (
        <Image
          source={{ uri: props.recipeForm.image_url }}
          style={styles.image}
        />
      ) : props.recipeForm.media_type === "video" ? (
        <Video
          source={{ uri: props.recipeForm.video_urls[0] }}
          style={styles.image}
          resizeMode="cover"
          isLooping
          shouldPlay
          isMuted
        />
      ) : (
        <Ionicons name="camera-outline" size={wp("6.5%")} color="#313131" />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, .05)",
    width: wp("30%"),
    height: wp("30%"),
    borderRadius: wp("5%"),
    margin: wp("3%"),
    marginRight: wp("2.5%"),
  },

  image: {
    backgroundColor: "#F2F2F2",
    width: wp("30%"),
    height: wp("30%"),
    borderRadius: 10,
    margin: wp("5%"),
  },
});

const mapStateToProps = (state) => ({ recipeForm: state.recipeForm });

export default connect(mapStateToProps)(MediaInput);
