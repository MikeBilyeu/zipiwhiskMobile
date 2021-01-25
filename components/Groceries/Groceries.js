import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useKeepAwake } from "expo-keep-awake";

import Header from "./Header";
import RenderList from "./RenderList";

import groceryData from "./gorceryData";

const Groceries = () => {
  useKeepAwake();
  const [list, setList] = useState(groceryData.groceries);
  const [inputText, setInputText] = useState("");
  const inputField = useRef(null);
  const [inputFocused, setInputFocused] = useState();

  const onSubmit = () => {
    setInputFocused(false);
    inputText &&
      setList(
        [
          ...list,
          {
            id: uuidv4(),
            completed: false,
            amount: null,
            ingredient: inputText,
            image: null,
          },
        ],
        setInputText("")
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <Header
          inputFocused={inputFocused}
          setInputFocused={setInputFocused}
          list={list}
        />
        <ScrollView
          style={styles.listContainer}
          keyboardShouldPersistTaps="always"
        >
          {RenderList(list, setList, inputFocused, setInputFocused)}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              multiline
              scrollEnabled={false}
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              ref={inputField}
              onFocus={() => setInputFocused(true)}
              returnKeyType="done"
              placeholder="Add Item"
              blurOnSubmit={true}
              onBlur={onSubmit}
              onSubmitEditing={onSubmit}
            />
          </View>

          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={inputField.current?.focus}
          ></TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  listContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 75,
  },

  inputContainer: {
    width: "90%",
  },
  inputText: {
    fontSize: 18,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
    paddingHorizontal: 15,
    paddingTop: 30,
    paddingBottom: 10,
    maxHeight: 1000,
  },

  addItemBtn: {
    height: "100%",
    minHeight: 300,
  },
});

export default Groceries;
