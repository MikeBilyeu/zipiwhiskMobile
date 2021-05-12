import React, { useState } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { connect } from "react-redux";

const Input = (props) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Image source={{ uri: props.user.image }} style={styles.icon} />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setText(text)}
        value={text}
        clearButtonMode="never"
        selectionColor="#464646"
        placeholder="Add a Comment..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderColor: "#B7B7B7",
    borderWidth: 1,
    height: 50,
    width: "100%",
    borderRadius: 5,
    marginVertical: 5,
  },
  icon: {
    height: 35,
    width: 35,
    margin: 5,
    resizeMode: "stretch",
    borderRadius: 100,
    position: "absolute",
  },
  textInput: {
    flex: 4,
    fontSize: 18,
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    height: 50,
    paddingLeft: 50,
    paddingRight: 10,
    textAlign: "left",
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(Input);
