import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Keyboard,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ZipiWhiskIcon from "./Header/ZipiWhiskIcon";
import SearchBtn from "./SearchBtn";
import SearchDropDown from "./SearchDropDown";
import RecipeCard from "./RecipeCard";
import data from "../data";

const Header = ({ dropDownOpen, toggleDropDown }) => {
  return (
    <View style={styles.headerContainer}>
      <ZipiWhiskIcon />
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
    </View>
  );
};

const Home = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleDropDown = () => {
    Keyboard.dismiss();
    setDropDownOpen(!dropDownOpen);
  };
  const handleLoadMore = () => console.log("load more");
  const renderItem = ({ item }) => <RecipeCard data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header toggleDropDown={toggleDropDown} dropDownOpen={dropDownOpen} />
        <SearchDropDown
          dropDownOpen={dropDownOpen}
          setDropDownOpen={setDropDownOpen}
          height={wp("17%")}
          search={search}
          setSearch={setSearch}
        />
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={{ paddingTop: wp("17%") }}
          data={data}
          numColumns={1}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    height: wp("17%"),
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 2,
    backgroundColor: "#fff",
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
