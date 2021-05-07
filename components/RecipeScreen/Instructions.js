import React from "react";
import { StyleSheet, ScrollView, Text, View, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const renderList = (list) => {
  return list.map((step, index) => (
    <View key={index} style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Instructions</Text>
      <View>
        <ScrollView
          bounces="false"
          nestedScrollEnabled={true}
          style={styles.cardScroll}
        >
          <Text style={styles.cardText}>{step}</Text>
        </ScrollView>
      </View>
      <Text style={styles.cardNum}>Step {index + 1}</Text>
    </View>
  ));
};

const Instructions = (props) => {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {renderList(props.data.instructions)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    paddingVertical: 40,
    marginVertical: wp("6%"),
  },
  cardContainer: {
    width: screenWidth - 20,
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 40,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  cardTitle: {
    textAlign: "center",
    color: "#B7B7B7",
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    top: wp("6%"),
    width: screenWidth - 20,
  },
  cardScroll: {},
  cardText: {
    fontSize: wp("8%"),
    lineHeight: wp("10%"),
    fontFamily: "AvenirNextRegular",
    textAlign: "center",
    color: "#313131",
  },
  cardNum: {
    textAlign: "center",
    color: "#B7B7B7",
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    bottom: wp("6%"),
    width: screenWidth - 20,
  },
});

export default Instructions;
