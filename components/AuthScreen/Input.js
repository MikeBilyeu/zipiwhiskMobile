import React from "react";
import { StyleSheet, TextInput, Image, View } from "react-native";

function Input(props) {
  return (
    <View style={styles.inputContainer}>
      <Image source={props.iconPath} style={styles.icon} />
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
    padding: 10,
    marginHorizontal: 20,
    height: 20,
    width: 20,
    resizeMode: "stretch",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: "#313131",
    height: 50,
    width: "95%",
    position: "absolute",
    paddingLeft: 45,
  },
});

export default Input;
