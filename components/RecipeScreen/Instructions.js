import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
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

const renderItem = ({ item }, fadeOut) => {
  return (
    <Pressable
      style={styles.cardContainer}
      onStartShouldSetResponder={() => true}
      onPress={fadeOut}
    >
      {/* <ScrollView
          bounces={false}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.cardScroll}
          indicatorStyle={"white"}
        > */}
      <Text style={styles.cardText}>{item}</Text>
      {/* </ScrollView> */}
    </Pressable>
  );
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
    <Pressable style={styles.wrapper} onPress={props.fadeOut}>
      <FlatList
        data={props.data.instructions.split(/\r?\n{2}/)}
        renderItem={(item) => renderItem(item, props.fadeOut)}
        keyExtractor={(item, i) => i}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={250}
        onScroll={(event) => {
          props.setCardNum(
            Math.round(
              parseFloat(event.nativeEvent.contentOffset.x / screenWidth)
            )
          );
        }}
        initialScrollIndex={props.cardNum}
        getItemLayout={(data, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
      />
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
    height: hp("90%"),
    alignItems: "center",
    marginTop: hp("2.5%"),
  },
  cardContainer: {
    width: screenWidth,
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("5%"),
    paddingBottom: hp("15%"),
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
