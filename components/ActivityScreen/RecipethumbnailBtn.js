import React from "react";
import { StyleSheet, Pressable, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RecipeThumbnailBtn = ({ media_url, handleOnPress }) => {
  return (
    <Pressable onPress={null}>
      <Image style={styles.image} onPress={null} source={{ uri: media_url }} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: wp("2%"),
    width: wp("10%"),
    height: wp("10%"),
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
});

export default RecipeThumbnailBtn;
