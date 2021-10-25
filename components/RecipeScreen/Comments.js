import React from "react";
import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";

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
    <>
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          <Text style={styles.title}>Comments</Text>
          <FlatList
            data={data[0].comments}
            renderItem={renderComment}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
      <Input />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: hp("12%"),
    width: "100%",
    height: hp("55%"),
    zIndex: 2,
    borderColor: "#fff",
    paddingTop: 6,
  },

  wrapper: {
    marginTop: hp("60%"),
    paddingHorizontal: 10,
    paddingVertical: hp("3%"),
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
