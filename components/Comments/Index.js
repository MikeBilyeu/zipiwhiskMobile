import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";

import ScreenHeader from "../ScreenHeader";
import Input from "./Input";
import Comment from "./Comment";
import data from "../../data.js";

const renderComment = ({ item }) => {
  return <Comment key={item.id.toString()} c={item} />;
};

const Comments = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Comments" subTitle={props.route.params.title} />
      <View style={styles.wrapper}>
        <Input />
        <FlatList
          data={data[0].comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: 25,
    width: "100%",
    flex: 1,
  },
});

export default Comments;
