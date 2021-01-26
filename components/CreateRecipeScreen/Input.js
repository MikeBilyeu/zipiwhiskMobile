import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const Input = ({
  name,
  info,
  value,
  setValue,
  placeholder,
  multiline,
  keyboardType = "default",
  returnKeyType = "next",
}) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.infoText}>{info}</Text>
      </View>

      <TextInput
        style={styles.textInput}
        defaultValue={text}
        onChangeText={(text) => setText(text)}
        placeholder={placeholder}
        placeholderTextColor="#E2E2E2"
        multiline={multiline}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: "#E3E3E3",
    height: 85,
  },
  nameWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: "absolute",
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
  textInput: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default Input;
