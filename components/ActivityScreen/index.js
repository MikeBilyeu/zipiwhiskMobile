import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
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
      case "mention":
        return <Mention data={item} />;

      default:
        return <View></View>;
    }
  };

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <ActivityHeader />
      <FlatList
        style={styles.listContainer}
        data={data}
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listContainer: {
    flex: 1,
    paddingTop: 50,
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Activity;
