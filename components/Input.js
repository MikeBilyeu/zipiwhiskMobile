import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

function Input(props) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <View style={[styles.inputContainer, props.error && styles.error]}>
        <Ionicons
          name={props.iconName}
          size={wp("6%")}
          color={props.error ? "#DE4949" : focus ? "#313131" : "#B7B7B7"}
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => props.handleChange(text)}
          value={props.value}
          placeholder={props.placeholder}
          textContentType={props.textContentType}
          clearButtonMode="while-editing"
          selectionColor="#464646"
          returnKeyType="done"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    height: wp("13%"),
    width: "95%",
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#F2F2F2",
    paddingHorizontal: 0,
    margin: 5,
  },
  error: {
    borderColor: "#DE4949",
  },

  icon: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    fontSize: wp("4.5%"),
    lineHeight: wp("4.5%"),
    color: "#313131",
    height: wp("13%"),
    width: "95%",
    position: "absolute",
    paddingLeft: wp("14%"),
    paddingTop: wp("1%"),
    fontFamily: "AvenirNextRegular",
  },
  errorText: {
    color: "#313131",
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextRegular",
    alignSelf: "center",
  },
});

export default Input;
