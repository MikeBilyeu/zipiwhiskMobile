import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

const renderList = (list) => {
  return list.map((step, index) => (
    <View key={index} style={styles.cardContainer}>
      {index === 0 && <Text style={styles.cardTitle}>Instructions</Text>}

      <Text style={styles.cardText}>{step}</Text>

      <Text style={styles.cardNum}>step {index + 1}</Text>
    </View>
  ));
};

const Instructions = (props) => {
  return (
    <ScrollView
      horizontal={true}
      decelerationRate={"fast"}
      snapToInterval={375} //your element width
      snapToAlignment={"center"}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {renderList(props.Data.instructions)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 700,
    width: "100%",
    paddingVertical: 50,
  },
  cardContainer: {
    width: 355,
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
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    top: 20,
    width: 355,
  },
  cardText: {
    fontSize: 30,
    fontFamily: "AvenirNextRegular",
    textAlign: "center",
  },
  cardNum: {
    textAlign: "center",
    color: "#B7B7B7",
    fontSize: 15,
    fontFamily: "AvenirNextRegular",
    position: "absolute",
    bottom: 20,
    width: 355,
  },
});

export default Instructions;
