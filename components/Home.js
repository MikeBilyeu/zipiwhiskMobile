import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
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
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.8}
        style={styles.searchBtn}
      >
        <Image
          source={require("../assets/search.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.searchBtnText}>{"Search"}</Text>
        <Image
          source={require("../assets/arrow.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}
function Home() {
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
  searchBtn: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBtnText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});

export default Home;
