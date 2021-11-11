import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { Video } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MediaInput = ({ media_url, media_type, handleOnChange }) => {
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
      {media_type === "image" ? (
        <Image source={{ uri: media_url }} style={styles.image} />
      ) : media_type === "video" ? (
        <Video
          source={{ uri: media_url }}
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

export default MediaInput;
