import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import moment from "moment";
import UserNameBtn from "../UserNameBtn";

const Like = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <UserNameBtn username={data.user.username} image={data.user.image} />
        <Text style={styles.text}>Liked your recipe.</Text>
        <TouchableOpacity style={styles.imageWrapper}>
          <Image
            style={styles.image}
            onPress={null}
            source={{ uri: data.image }}
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
    padding: 5,
    paddingTop: 10,
    marginBottom: 20,
  },
  contentWrapper: {
    flexDirection: "row",
  },

  text: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    lineHeight: 40,
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

export default Like;
