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

import Header from "./Header";
import RenderList from "./RenderList";

import groceryData from "./gorceryData";

const Groceries = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(groceryData.groceries);
  const inputField = useRef(null);
  const [inputFocused, setInputFocused] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <Header inputFocused={inputFocused} setInputFocused={setInputFocused} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={styles.listContainer}
            keyboardShouldPersistTaps="always"
          >
            {RenderList(list, setList, inputFocused, setInputFocused)}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                onChangeText={(text) => setInputText(text)}
                value={inputText}
                ref={inputField}
                onFocus={() => setInputFocused(true)}
                returnKeyType="done"
                placeholder="Add Item"
                //blurOnSubmit={false}
                onBlur={() => {
                  setInputFocused(false);
                  inputText &&
                    setList(
                      [
                        ...list,
                        {
                          id: uuidv4(),
                          amount: null,
                          ingredient: inputText,
                          image: null,
                        },
                      ],
                      setInputText("")
                    );
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.addItemBtn}
              onPress={() => inputField.current.focus()}
            ></TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
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
    paddingHorizontal: 15,
  },
  inputText: {
    height: 50,
    fontSize: 20,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },

  addItemBtn: {
    height: "100%",
    minHeight: 300,
  },
});

export default Groceries;
