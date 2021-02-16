import React, { useState, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
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
          contentContainerStyle={{ paddingTop: 75, flexGrow: 1 }}
          keyboardShouldPersistTaps="always"
        >
          {RenderList(list, setList, inputFocused, setInputFocused)}

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
            //onSubmitEditing={onSubmit}
          />

          <TouchableOpacity
            style={styles.addItemBtn}
            activeOpacity={1}
            onPress={() => inputField.current.focus()}
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
    paddingTop: 10,
    width: "100%",
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
    flex: 1,
    minHeight: 300,
    width: "100%",
  },
});

export default Groceries;
