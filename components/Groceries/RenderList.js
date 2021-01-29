import React from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Swipeable } from "react-native-gesture-handler";

const RightAction = (removeItem) => (
  <TouchableOpacity
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
    style={styles.rightContainer}
    onPress={removeItem}
  >
    <Text style={styles.rightText}>Remove</Text>
  </TouchableOpacity>
);
const RenderList = (list, setList, inputFocused, setInputFocused) =>
  list.map((i, index) => {
    const onSubmit = () => {
      setInputFocused(false);
      //this will remove empty textinput
      !i.ingredient && removeItem();
    };
    const removeItem = () => setList(list.filter((item, i) => i != index));

    onRadioPress = () => {
      let newList = [...list];
      newList[index].completed = !newList[index].completed;
      setList(newList);
    };

    return (
      <Swipeable
        renderRightActions={() => RightAction(removeItem)}
        key={i.id}
        style={{ width: "100%", borderWdith: 5 }}
      >
        <View style={styles.ingredientContainer}>
          <TouchableOpacity style={styles.radioBtn} onPress={onRadioPress}>
            <Ionicons
              name={
                i.completed ? "ios-radio-button-on" : "ios-radio-button-off"
              }
              size={25}
              color="#0172C4"
            />
          </TouchableOpacity>
          <View style={styles.ingredientWrapper}>
            <TextInput
              multiline
              scrollEnabled={false}
              style={styles.ingredientName}
              onFocus={() => setInputFocused(true)}
              onChangeText={(text) => {
                let newList = [...list];
                newList[index].ingredient = text;
                setList(newList);
              }}
              blurOnSubmit={true}
              onSubmitEditing={onSubmit}
              onBlur={onSubmit}
              value={i.ingredient}
              returnKeyType="done"
            />
            {/* <Text style={styles.ingredientName}>{i.ingredient}</Text>
      <Text style={styles.ingredientAmount}>{i.amount}</Text> */}
          </View>

          {/* <Image source={{ uri: i.image }} style={styles.ingredientImage} /> */}
        </View>
      </Swipeable>
    );
  });
const styles = StyleSheet.create({
  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  ingredientWrapper: {
    justifyContent: "space-between",
    flex: 5,
  },
  ingredientImage: {
    width: 40,
    borderRadius: 10,
    alignSelf: "center",
  },
  radioBtn: {
    flex: 1,
    height: "100%",
    maxHeight: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  ingredientName: {
    fontSize: 18,
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    paddingRight: 15,
    //paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 1000,
  },
  ingredientAmount: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#707070",
  },
  rightContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DE4949",
    marginHorizontal: 5,
    marginVertical: 0.5,
  },
  rightText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 18,
    color: "#fff",
  },
});

export default RenderList;
