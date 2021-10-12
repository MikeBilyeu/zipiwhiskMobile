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
    <View
      key={index}
      style={styles.cardContainer}
      onStartShouldSetResponder={() => true}
    >
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
    </View>
  ));
};

const renderCardNum = (list) => {
  return list.map((step, index) => (
    <View
      style={{
        width: wp("1.3%"),
        height: wp("1.3%"),
        borderRadius: 50,
        backgroundColor: "rgba(255,255,255,.2)",
        marginHorizontal: wp("1%"),
      }}
    />
  ));
};

const Instructions = (props) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {renderList(props.data.instructions)}
      </ScrollView>
      <View style={styles.cardNumContainer}>
        {renderCardNum(props.data.instructions)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: hp("90%"),
    alignItems: "center",
    marginBottom: hp("3%"),
  },

  cardContainer: {
    width: screenWidth - 20,
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: hp("2%"),
    marginVertical: hp("3%"),
    backgroundColor: "rgba(0,0,0,.7)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  cardTitle: {
    textAlign: "center",
    color: "#464646",
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    top: wp("6%"),
    width: screenWidth - 20,
  },
  cardText: {
    fontSize: wp("8%"),
    lineHeight: wp("10%"),
    fontFamily: "AvenirNextRegular",
    textAlign: "center",
    color: "#fff",
  },
  cardNumContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: hp("-2%"),
  },
  cardNum: {
    textAlign: "center",
    color: "#464646",
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    bottom: wp("6%"),
    width: screenWidth - 20,
  },
});

export default Instructions;
