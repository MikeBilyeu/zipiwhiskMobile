import React from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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

    return (
      <Swipeable
        renderRightActions={() => RightAction(removeItem)}
        key={i.id}
        style={{ width: "100%" }}
      >
        <View style={styles.ingredientContainer}>
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
              //onSubmitEditing={onSubmit}
              onBlur={onSubmit}
              value={i.ingredient}
              returnKeyType="done"
            />
          </View>
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

  ingredientName: {
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    paddingHorizontal: wp("3%"),
    paddingVertical: wp("4%"),
    maxHeight: 1000,
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
    fontSize: wp("4.5"),
    color: "#fff",
  },
});

export default RenderList;
