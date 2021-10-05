import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import RecipeThumbnailBtn from "./RecipethumbnailBtn";
import UserNameBtn from "../UserNameBtn";
import Time from "./Time";

const Post = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <UserNameBtn
          username={data.user.username}
          image_url={data.user.image_url}
          id={data.user.id}
        />
        <Text style={styles.text}>Posted a recipe.</Text>
        <RecipeThumbnailBtn media_url={data.media_url} />
      </View>
      <Time time={data.timestamp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
    marginBottom: wp("5%"),
    // padding: wp("2%"),
  },
  contentWrapper: {
    flexDirection: "row",
    marginTop: wp("5%"),
    marginBottom: wp("1%"),
  },

  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4%"),
    lineHeight: wp("10%"),
  },
});

export default Post;
