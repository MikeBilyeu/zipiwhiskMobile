import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchBtn from "./SearchBtn";
import SearchDropDown from "./SearchDropDown";
import RecipeCard from "./RecipeCard";
import RecipeCardSmall from "./RecipeCardSmall";
import data from "../data";

function Header({ dropDownOpen, toggleDropDown }) {
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
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Search"
      />
      <View
        style={[
          styles.bottomLine,
          dropDownOpen ? { opacity: 0 } : { opacity: 1 },
        ]}
      />
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
        <SearchDropDown
          dropDownOpen={dropDownOpen}
          setDropDownOpen={setDropDownOpen}
          height={75}
        />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={{ paddingTop: 75 }}
          data={data}
          numColumns={1}
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
  bottomLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
