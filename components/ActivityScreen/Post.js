import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import moment from "moment";

import RecipeCard from "../RecipeCard";
import UserNameBtn from "../UserNameBtn";

const Post = ({ data }) => {
  return (
    <View style={styles.container}>
      <RecipeCard data={data.recipe} />

      <View style={styles.contentWrapper}>
        <UserNameBtn username={data.user.username} image={data.user.image} />
        <Text style={styles.text}>Posted a recipe.</Text>
      </View>

      <Text style={styles.time}>{moment(data.timestamp).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
    paddingTop: 20,
    marginBottom: 20,
  },
  contentWrapper: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  userImage: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: 0,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  username: {
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
    lineHeight: 18,
  },
  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    lineHeight: 30,
  },
  time: {
    color: "#B7B7B7",
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
    marginHorizontal: 5,
    marginBottom: 5,
  },
});

export default Post;
