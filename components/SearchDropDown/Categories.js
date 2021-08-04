import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Animated,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
    navigation.navigate("Results", {
      search: name,
      renderItemType: props.renderItemType,
    });
  };
  return (
    <>
      <Animated.View style={styles.categoryContainer}>
        <TextInput editable={false} style={styles.containerTitle}>
          Categories
        </TextInput>
        <View style={styles.btnContainer}>
          <CategoryBtn handlePress={handlePress} name="Breakfast" />
          <CategoryBtn handlePress={handlePress} name="Lunch/Dinner" />
          <CategoryBtn handlePress={handlePress} name="Snack" />
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
    fontSize: wp("3.5%"),
    color: "#313131",
    textAlign: "center",
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
    paddingBottom: 5,
    paddingTop: wp("4%"),
  },

  btnContainer: {
    flex: 1,
    marginTop: wp("4%"),
    marginBottom: wp("6%"),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btnWrapper: {
    justifyContent: "center",
    paddingVertical: wp("3.7%"),
    paddingHorizontal: wp("10%"),
    margin: wp("3.2%"),
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
});
export default Categories;
