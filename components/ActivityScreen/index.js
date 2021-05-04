import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ActivityHeader from "./ActivityHeader";
import Follow from "./Follow";
import Post from "./Post";
import Like from "./Like";
import Mention from "./Mention";

import { data } from "./data";

function Activity() {
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "follow":
        return <Follow data={item} />;
      case "like":
        return <Like data={item} />;
      case "post":
        return <Post data={item} />;
      case "mention":
        return <Mention data={item} />;

      default:
        return <View></View>;
    }
  };

  return (
    <View style={styles.container}>
      <ActivityHeader />
      <FlatList
        style={styles.listContainer}
        data={data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
  },
});

export default Activity;