import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

import data from "../data";

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{"Groceries"}</Text>
      </View>
    </View>
  );
}
const Groceries = () => {
  const renderList = (list) => {
    return list.map((i) => (
      <View key={i.ingredient} style={styles.ingredientContainer}>
        <View style={styles.ingredientWrapper}>
          <Text style={styles.ingredientName}>{i.ingredient}</Text>
          <Text style={styles.ingredientAmount}>{i.amount}</Text>
        </View>
        <Image source={i.image} style={styles.ingredientImage} />
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={styles.listContainer}>
        {renderList(data[0].ingredientList)}
      </ScrollView>
    </SafeAreaView>
  );
};

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
    justifyContent: "flex-start",
  },

  titleText: {
    textAlign: "left",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },

  listContainer: {
    width: "100%",
    marginVertical: 10,
  },

  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  ingredientImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  ingredientWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  ingredientName: {
    fontSize: 20,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  ingredientAmount: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },
});

export default Groceries;
