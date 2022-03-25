import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenWidth = Dimensions.get("screen").width;

const renderList = (list) => {
  return list?.split(/\r?\n{2}/).map((step, index) => (
    <View
      key={index}
      style={styles.cardContainer}
      onStartShouldSetResponder={() => true}
    >
      <View>
        <ScrollView
          bounces={true}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.cardScroll}
          indicatorStyle={"white"}
        >
          <Pressable>
            <Text style={styles.cardText}>{step}</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  ));
};

const renderCardNum = (list, cardNum) => {
  return list.map((step, index) => (
    <View
      key={index}
      style={{
        width: wp("1.3%"),
        height: wp("1.3%"),
        borderRadius: 50,
        backgroundColor: index === cardNum ? "#fff" : "rgba(255,255,255,.2)",
        marginHorizontal: wp("1%"),
      }}
    />
  ));
};

const Instructions = (props) => {
  return (
    <Pressable style={styles.wrapper} onPress={null}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        scrollEventThrottle={250}
        contentOffset={{ x: props.cardNum * screenWidth }}
        onScroll={(event) => {
          props.setCardNum(
            Math.round(
              parseFloat(event.nativeEvent.contentOffset.x / screenWidth)
            )
          );
        }}
      >
        {renderList(props.data.instructions)}
      </ScrollView>
      <View style={styles.cardNumContainer}>
        {renderCardNum(
          props.data.instructions?.split(/\r?\n{2}/),
          props.cardNum
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: hp("86%"),
    alignItems: "center",
  },
  cardContainer: {
    width: screenWidth - 20,
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: wp("10%"),
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("5%"),
    marginBottom: hp("6%"),
    backgroundColor: "rgba(0,0,0,.7)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: hp("1.5%"),
    marginVertical: hp("2.5%"),
  },
  cardText: {
    fontSize: wp("6%"),
    lineHeight: wp("9%"),
    fontFamily: "AvenirNextRegular",
    textAlign: "center",
    color: "#fff",
  },
  cardNumContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: hp("-3.5%"),
  },
  cardScroll: {
    paddingHorizontal: wp("4%"),
  },
});

export default Instructions;
