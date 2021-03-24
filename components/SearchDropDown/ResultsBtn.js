import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Btn = (props) => {
  const btnActive = props.resultsDisplay === props.btnName;
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => props.setResultsDisplay(props.btnName)}
    >
      <Text style={[styles.btnText, btnActive && styles.btnActive]}>
        {props.btnName}
      </Text>
    </TouchableOpacity>
  );
};

const ResultsBtn = (props) => {
  const navigation = useNavigation();
  const { index, routes } = navigation.dangerouslyGetState();
  const currentRoute = routes[index].name;
  return (
    <View style={styles.container}>
      <Btn
        btnName="Recipes"
        resultsDisplay={props.resultsDisplay}
        setResultsDisplay={props.setResultsDisplay}
      />
      {currentRoute === "Home" && (
        <Btn
          btnName="Accounts"
          resultsDisplay={props.resultsDisplay}
          setResultsDisplay={props.setResultsDisplay}
        />
      )}
      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    flex: 1,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    color: "#B7B7B7",
  },
  btnActive: {
    color: "#313131",
  },
  bottomLine: {
    position: "absolute",
    width: 100,
    // borderBottomWidth: 1,
    left: "10%",
    bottom: 0,
  },
});

export default ResultsBtn;
