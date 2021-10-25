import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
  Text,
} from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Input = (props) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.wrapper, { bottom: isFocused ? hp("38.5%") : 0 }]}>
      <View style={styles.inputContainer}>
        <Image source={{ uri: props.user.image_url }} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
          clearButtonMode="never"
          selectionColor="#464646"
          placeholder="Add a Comment..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Pressable
          onPress={() => console.log("post comment")}
          style={styles.postBtn}
          hitSlop={25}
        >
          <Text style={styles.postBtnText}>Post</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: hp("12%"),
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 10,
    borderTopWidth: 0.25,
    borderColor: "rgba(256,256,256,.1)",
    backgroundColor: "#000",
    zIndex: 3,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    borderColor: "#313131",
    borderWidth: 0.75,
    height: hp("6.5%"),
    width: "100%",
    borderRadius: 5,
  },
  icon: {
    height: wp("9%"),
    width: wp("9%"),
    margin: wp("2%"),
    resizeMode: "stretch",
    borderRadius: 100,
    position: "absolute",
  },
  textInput: {
    flex: 4,
    fontSize: wp("3.75%"),
    color: "#fff",
    fontFamily: "AvenirNextRegular",
    height: hp("6.5%"),
    paddingLeft: 50,
    paddingRight: 10,
    textAlign: "left",
  },
  postBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: wp("9%"),
    width: wp("9%"),
    resizeMode: "stretch",
    borderRadius: 100,
    position: "absolute",
    right: wp("4%"),
  },
  postBtnText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.75%"),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Input);
