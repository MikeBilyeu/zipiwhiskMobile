import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import UserNameBtn from "../UserNameBtn";
import Time from "./Time";

const Mention = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <UserNameBtn
          username={data.user.username}
          image_url={data.user.image_url}
        />
        <Text style={styles.text}>
          Mentioned you in a comment: {data.comment}
        </Text>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image
            style={styles.image}
            onPress={null}
            source={{ uri: data.recipe.recipeImage }}
          />
        </TouchableOpacity>
      </View>

      <Time time={data.timestamp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: wp("2%"),
    paddingTop: wp("3%"),
    marginBottom: wp("5%"),
  },
  contentWrapper: {
    flexDirection: "row",
  },

  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4%"),
    lineHeight: wp("4%"),
    flex: 3,
  },
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

export default Mention;
