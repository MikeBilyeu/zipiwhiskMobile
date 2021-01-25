import React from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

const RenderList = (list, setList) =>
  list.map((i, index) => (
    <TouchableOpacity activeOpacity={0.8} key={index} style={{ width: "100%" }}>
      <View style={styles.ingredientContainer}>
        <View style={styles.ingredientWrapper}>
          <TextInput
            key={i.id}
            style={styles.ingredientName}
            onChangeText={(text) => {
              let newList = [...list];
              newList[index].ingredient = text;
              setList(newList);
            }}
            onBlur={() => {
              !i.ingredient && setList(list.filter((item, i) => i != index));
            }}
            value={i.ingredient}
            returnKeyType="done"
          />
          {/* <Text style={styles.ingredientName}>{i.ingredient}</Text>
      <Text style={styles.ingredientAmount}>{i.amount}</Text> */}
        </View>
        <Image source={{ uri: i.image }} style={styles.ingredientImage} />
      </View>
    </TouchableOpacity>
  ));

const styles = StyleSheet.create({
  ingredientContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingRight: 15,
    height: 85,
  },
  ingredientWrapper: {
    justifyContent: "space-between",
    flex: 0.9,
    height: 85,
  },
  ingredientImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignSelf: "center",
  },

  ingredientName: {
    fontSize: 18,
    fontFamily: "AvenirNextBold",
    color: "#313131",
    paddingLeft: 15,
    height: 85,
  },
  ingredientAmount: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#707070",
  },
});

export default RenderList;
