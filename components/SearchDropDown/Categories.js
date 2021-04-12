import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Animated,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryBtn = ({ name, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.btnWrapper}
      onPress={() => handlePress(name)}
    >
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Categories = (props) => {
  const navigation = useNavigation();
  const handlePress = (name) => {
    props.setDropDownOpen(false);
    navigation.navigate("Results", { search: name });
  };
  return (
    <>
      <Animated.View style={styles.categoryContainer}>
        <TextInput editable={false} style={styles.containerTitle}>
          Categories
        </TextInput>
        <View style={styles.btnContainer}>
          <CategoryBtn handlePress={handlePress} name="Breakfast" />
          <CategoryBtn handlePress={handlePress} name="Lunch" />
          <CategoryBtn handlePress={handlePress} name="Dinner" />
          <CategoryBtn handlePress={handlePress} name="Dessert" />
          <CategoryBtn handlePress={handlePress} name="Beverage" />
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    flex: 1,
  },
  containerTitle: {
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    color: "#313131",
    textAlign: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    paddingBottom: 5,
    paddingTop: 15,
  },

  btnContainer: {
    flex: 1,
    marginVertical: 15,
  },
  btnWrapper: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 18,
    fontFamily: "AvenirNextDemiBold",
    color: "#464646",
    textAlign: "center",
  },
});
export default Categories;
