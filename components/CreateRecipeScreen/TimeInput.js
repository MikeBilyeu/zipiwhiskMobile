import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { connect } from "react-redux";

// 5     ->  00:05
// 55    ->  00:55
// 555   ->  05:55
// 5555  ->  55:55
//hours and mins can only be two digits long
// if mins becomes longer than 2 digits push the left text intot the hours
// if the mins get deleted remove from hours and insert back into mins
//

const TimeInput = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.infoText}>{props.info}</Text>
      </View>

      <TextInput
        style={[
          styles.textInput,
          { textAlign: "right", flex: 1 },
          props.inputStyles,
        ]}
        onChangeText={(hr) => props.timeHrChange(hr)}
        placeholderTextColor="#E2E2E2"
        scrollEnabled={false}
        value={props.value.hours}
        {...props}
      />
      <Text style={styles.colon}>:</Text>
      <TextInput
        style={[styles.textInput, { flex: 1 }, props.inputStyles]}
        onChangeText={(min) => props.timeMinChange(min)}
        placeholderTextColor="#E2E2E2"
        scrollEnabled={false}
        value={props.value.minutes}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.25,
    borderColor: "#E3E3E3",
    height: 85,
    flexDirection: "row",
  },
  nameWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  nameText: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
  },
  infoText: {
    color: "#B7B7B7",
  },
  colon: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    position: "absolute",
    left: "49.5%",
    top: 30,
  },
  textInput: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    width: "100%",
    paddingHorizontal: 6,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default TimeInput;
