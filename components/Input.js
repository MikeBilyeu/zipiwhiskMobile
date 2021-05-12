import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

function Input(props) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name={props.iconName}
        size={wp("6%")}
        color={focus ? "#313131" : "#B7B7B7"}
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
        secureTextEntry={props.secureTextEntry}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
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
    paddingHorizontal: 0,
    margin: 5,
  },
  icon: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    fontSize: wp("4.5"),
    color: "#313131",
    height: wp("13%"),
    width: "95%",
    position: "absolute",
    paddingLeft: wp("14%"),
  },
});

export default Input;
