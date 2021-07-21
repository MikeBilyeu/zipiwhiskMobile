import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const Input = (props) => {
  const [height, setHeight] = useState(0);
  return (
    <View style={[styles.container, { height: Math.max(85, height + 55) }]}>
      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.infoText}>{props.info}</Text>
      </View>

      <TextInput
        style={[
          styles.textInput,
          props.multiline && { paddingTop: 35 },
          props.inputStyles,
        ]}
        onChangeText={(text) => props.setValue(text)}
        placeholderTextColor="#E2E2E2"
        scrollEnabled={false}
        onContentSizeChange={(event) =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        {...props}
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
  textInput: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default Input;
