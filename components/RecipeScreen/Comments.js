import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import Input from "./Input";
import Comment from "./Comment";
import data from "../../data.js";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const renderComment = ({ item }) => <Comment c={item} />;

const Comments = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Comments</Text>
      <FlatList
        data={data[0].comments}
        renderItem={renderComment}
        keyExtractor={(item) => item.id.toString()}
      />
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: hp("3%"),
    width: "100%",
    height: hp("80%"),
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,.97)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    color: "#fff",
    marginBottom: hp("1%"),
  },
});

export default Comments;
