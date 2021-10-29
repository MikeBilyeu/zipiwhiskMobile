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
const screenHeight = Dimensions.get("screen").height;

const renderList = (list) => {
  return list.map((step, index) => (
    <View
      key={index}
      style={styles.cardContainer}
      onStartShouldSetResponder={() => true}
    >
      <View>
        <ScrollView
          bounces={false}
          nestedScrollEnabled={true}
          style={styles.cardScroll}
        >
          <Text style={styles.cardText}>{step}</Text>
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
  const [cardNum, setCardNum] = useState(0);
  return (
    <Pressable style={styles.wrapper} onPress={null}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        scrollEventThrottle={250}
        onScroll={(event) => {
          setCardNum(
            Math.round(
              parseFloat(event.nativeEvent.contentOffset.x / screenWidth)
            )
          );
        }}
      >
        {renderList(props.data.instructions)}
      </ScrollView>
      <View style={styles.cardNumContainer}>
        {renderCardNum(props.data.instructions, cardNum)}
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
    borderRadius: 25,
    paddingHorizontal: wp("7%"),
    paddingVertical: hp("5%"),
    marginBottom: hp("6%"),
    backgroundColor: "rgba(0,0,0,.7)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
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
  cardScroll: {},
});

export default Instructions;
