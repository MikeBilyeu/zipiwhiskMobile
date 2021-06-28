import React from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
const RenderList = (
  list,
  setList,
  inputFocused,
  setInputFocused,
  setSwipeIsOpen
) =>
  list.map((i, index) => {
    const onSubmit = () => {
      setInputFocused(false);
      //this will remove empty textinput
      !i.ingredient && removeItem();
    };
    const removeItem = () => {
      setList(list.filter((item, i) => i != index));
      setSwipeIsOpen(false);
    };

    return (
      <Swipeable
        renderRightActions={() => RightAction(removeItem)}
        onSwipeableRightOpen={() => setSwipeIsOpen(true)}
        onSwipeableClose={() => setSwipeIsOpen(false)}
        key={i.id}
      >
        <View style={styles.ingredientContainer}>
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
            //onSubmitEditing={onSubmit}
            onBlur={onSubmit}
            value={i.ingredient}
            returnKeyType="done"
          />
        </View>
      </Swipeable>
    );
  });
const styles = StyleSheet.create({
  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
  },
  ingredientName: {
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    paddingHorizontal: wp("3%"),
    paddingTop: wp("3%"),
    paddingBottom: wp("3%"),
    maxHeight: 1000,
  },
  rightContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DE4949",
    marginHorizontal: 5,
    marginVertical: 0.5,
    paddingVertical: wp("3%"),
    borderRadius: 5,
    alignSelf: "center",
  },
  rightText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
    color: "#fff",
  },
});

export default RenderList;
