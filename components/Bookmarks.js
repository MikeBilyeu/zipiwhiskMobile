import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

import RecipeCard from "./RecipeCard";
import data from "../data";

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{"Bookmarks"}</Text>
      </View>
    </View>
  );
}
function Bookmarks() {
  const renderItem = ({ item }) => <RecipeCard data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        style={styles.list}
        data={data}
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
  headerContainer: {
    paddingTop: 2,
    height: 65,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});

export default Bookmarks;
