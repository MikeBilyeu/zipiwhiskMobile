import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";

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
    fontSize: 12,
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    top: 20,
    width: screenWidth - 20,
  },
  cardScroll: {},
  cardText: {
    fontSize: 30,
    lineHeight: 35,
    fontFamily: "AvenirNextRegular",
    textAlign: "center",
    color: "#313131",
  },
  cardNum: {
    textAlign: "center",
    color: "#B7B7B7",
    fontSize: 12,
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    bottom: 20,
    width: screenWidth - 20,
  },
});

export default Instructions;
