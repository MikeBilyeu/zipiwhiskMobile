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
import { LinearGradient } from "expo-linear-gradient";

import Follow from "./Follow";
import Post from "./Post";
import Like from "./Like";
import Mention from "./Mention";

import { data, userData } from "./data";

function Header({ numFollowers, numFollowing }) {
  return (
    <LinearGradient
      colors={["#fff", "rgba(255, 255, 255, .9)"]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.headerContainer]}
    >
      <Image
        source={require("../../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.followContainer}>
        <TouchableOpacity style={styles.numWrapper} onPress={null}>
          <Text style={styles.num}>{numFollowers}</Text>
          <Text style={styles.numText}>Followers</Text>
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{"Activity"}</Text>
        </View>
        <TouchableOpacity style={styles.numWrapper} onPress={null}>
          <Text style={styles.num}>{numFollowing}</Text>
          <Text style={styles.numText}>Following</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
    </LinearGradient>
  );
}
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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header
          numFollowers={userData.numFollowers}
          numFollowing={userData.numFollowers}
        />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={{ paddingTop: 75 }}
          data={data}
          numColumns={1}
          renderItem={renderItem}
          // keyExtractor={(item) => null}
        />
      </View>
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
    height: 75,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1,
  },
  followContainer: {
    flexDirection: "row",
    flex: 1,
    padding: 5,
  },
  numWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  num: {
    fontFamily: "AvenirNextBold",
    fontSize: 16,
  },
  numText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 16,
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
  bottomLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
  },
  listContainer: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
  },
});

export default Activity;
