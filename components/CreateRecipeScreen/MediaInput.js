import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Video } from "expo-av";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MediaInput = ({ media_url, media_type, handleOnChange }) => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Camera");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
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
        <View style={styles.cameraIconContainer}>
          <Ionicons name="camera-outline" size={35} color="#313131" />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: "#E3E3E3",
  },
  image: {
    backgroundColor: "#F2F2F2",
    width: 300,
    height: 175,
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
  },
  cameraIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(200,200,200, .1)",
    width: 300,
    height: 175,
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
  },
});

export default MediaInput;
