import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchDropDown from "./SearchDropDown";
import RecipeCard from "./RecipeCard";
import data from "../data";

function Header({ dropDownOpen, toggleDropDown }) {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotateAnimation = () => {
    if (dropDownOpen) {
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (!dropDownOpen) {
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const rotateValueInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const rotateAnimationStyle = {
    transform: [{ rotate: rotateValueInterpolate }],
  };

  return (
    <LinearGradient
      colors={["#fff", "rgba(255, 255, 255, .8)"]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.headerContainer]}
    >
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <TouchableOpacity
        onPress={() => {
          rotateAnimation();
          toggleDropDown();
        }}
        activeOpacity={0.8}
        style={styles.searchBtn}
      >
        <Image
          source={require("../assets/search.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.searchBtnText}>{"Search"}</Text>
        <Animated.Image
          source={require("../assets/arrow.png")}
          style={[{ width: 15, height: 15 }, rotateAnimationStyle]}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}
function Home() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggleDropDown = () => setDropDownOpen(!dropDownOpen);

  const renderItem = ({ item }) => <RecipeCard data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header toggleDropDown={toggleDropDown} dropDownOpen={dropDownOpen} />
        <SearchDropDown dropDownOpen={dropDownOpen} />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={{ paddingTop: 75 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
    zIndex: 2,
  },
  searchBtn: {
    width: "100%",
    height: 65,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBtnText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
