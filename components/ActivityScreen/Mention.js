import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import moment from "moment";
import UserNameBtn from "../UserNameBtn";

const Mention = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <UserNameBtn username={data.user.username} image={data.user.image} />
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

      <Text style={styles.time}>{moment(data.timestamp).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    padding: 5,
    paddingTop: 10,
    marginBottom: 20,
  },
  contentWrapper: {
    flexDirection: "row",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 5,
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
    lineHeight: 15,
    flex: 3,
  },
  imageWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    borderRadius: 45,
    position: "relative",
    width: 45,
    height: 45,
  },

  time: {
    color: "#B7B7B7",
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
  },
});

export default Mention;
