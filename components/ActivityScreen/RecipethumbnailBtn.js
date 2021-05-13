import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const RecipeThumbnailBtn = ({ media_url, handleOnPress }) => {
  const navigation = useNavigation();
  let thumbnail = media_url.replace(".mp4", ".jpg");
  return (
    <TouchableOpacity style={styles.imageWrapper} onPress={null}>
      <Image style={styles.image} onPress={null} source={{ uri: media_url }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    borderRadius: 100,
    position: "relative",
    width: wp("12%"),
    height: wp("12%"),
  },
});

export default RecipeThumbnailBtn;
