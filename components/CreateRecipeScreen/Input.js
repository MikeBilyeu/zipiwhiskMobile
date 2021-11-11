import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Input = (props) => {
  const [height, setHeight] = useState(0);
  return (
    <View
      style={[
        styles.container,
        { height: Math.max(wp("30%"), height + hp("5%")) },
        props.captionInput && styles.captionContainer,
      ]}
    >
      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Text style={styles.infoText}>{props.info}</Text>
      </View>

      <TextInput
        style={[
          styles.textInput,

          props.multiline && styles.multiline,

          props.inputStyles,
          props.captionInput && styles.captionText,
        ]}
        onChangeText={(text) => props.setValue(text)}
        placeholderTextColor="#E2E2E2"
        scrollEnabled={false}
        onContentSizeChange={(event) => {
          console.log(event.nativeEvent.contentSize.height);
          setHeight(event.nativeEvent.contentSize.height);
        }}
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
    marginVertical: hp(".5%"),
  },
  captionContainer: {
    alignSelf: "center",
    borderBottomWidth: 0,
    justifyContent: "center",
  },
  nameWrapper: {
    height: hp("3.5%"),
    paddingHorizontal: wp("1%"),
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
  },
  nameText: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.5%"),
  },
  infoText: {
    color: "#B7B7B7",
    fontSize: wp("3.5%"),
  },
  textInput: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("5%"),
    flex: 1,
    paddingHorizontal: wp("2%"),
    paddingVertical: hp("2%"),
  },
  multiline: {
    paddingTop: hp("5%"),
  },
  captionText: {
    fontSize: wp("3.5%"),
    paddingHorizontal: wp("1%"),
    paddingVertical: hp("0%"),
    paddingTop: hp(".5%"),
    flex: 1,
  },
});

export default Input;
