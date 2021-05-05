import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function Input(props) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name={props.iconName}
        size={25}
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
    height: 50,
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
    fontSize: 18,
    color: "#313131",
    height: 50,
    width: "95%",
    position: "absolute",
    paddingLeft: 55,
  },
});

export default Input;
