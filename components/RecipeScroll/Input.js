import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Pressable,
  Animated,
  Text,
} from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  setInputFocused,
  setParentCommentId,
  postComment,
} from "../../redux/actions/recipe";

import { selectImageUrl } from "../../redux/reducers/userReducer";
import {
  selectInputFocused,
  selectParentCommentId,
} from "../../redux/reducers/recipeReducer";

const Input = (props) => {
  const inputEl = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    props.inputFocused ? inputEl.current.focus() : inputEl.current.blur();
  }, [props.inputFocused]);

  const handleOnBlur = () => {
    props.setInputFocused(false);
    props.setParentCommentId(null);
  };

  const handleSubmit = () => {
    props.postComment(props.recipeId, text, props.parentCommentId);
    setText("");
    inputEl.current.blur();
  };

  return (
    <Animated.View
      style={[
        styles.wrapper,
        { bottom: props.inputFocused ? hp("38.5%") : 0 },
        props.style,
      ]}
    >
      <View style={styles.inputContainer}>
        <Image source={{ uri: props.imageUrl }} style={styles.icon} />
        <TextInput
          ref={inputEl}
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
          clearButtonMode="never"
          selectionColor="#fff"
          placeholderTextColor="#464646"
          placeholder="Add a Comment..."
          onFocus={() => props.setInputFocused(true)}
          onBlur={handleOnBlur}
        />
        <Pressable onPress={handleSubmit} style={styles.postBtn} hitSlop={25}>
          <Text style={styles.postBtnText}>Post</Text>
        </Pressable>
      </View>
    </Animated.View>
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
    backgroundColor: "rgba(5,5,5, 1)",
    zIndex: 3,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(10,10,10,1)",
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
    paddingLeft: wp("15%"),
    paddingRight: wp("15%"),
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
  imageUrl: selectImageUrl(state),
  parentCommentId: selectParentCommentId(state),
  inputFocused: selectInputFocused(state),
});
export default connect(mapStateToProps, {
  setInputFocused,
  setParentCommentId,
  postComment,
})(Input);
