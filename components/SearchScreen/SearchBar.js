import React from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = (props) => {
  const navigation = useNavigation();
  const handleSubmit = () => {
    // navigation.navigate("Results", { search: props.search });

    return null;
  };
  return (
    <View style={styles.searchWrapper}>
      <Animated.View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={wp("6%")}
          color={props.isFocused ? "#313131" : "#B7B7B7"}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchText}
          placeholder="Search"
          returnKeyType="search"
          onFocus={() => props.setIsFocused(true)}
          onBlur={() => props.setIsFocused(false)}
          defaultValue={props.search}
          onChangeText={(text) => props.setSearch(text)}
          onSubmitEditing={handleSubmit}
        />
        {props.isFocused && props.search !== "" && (
          <Ionicons
            name="close"
            size={wp("5%")}
            color="#707070"
            style={styles.clearTextIcon}
            onPress={() => props.setSearch("")}
          />
        )}
      </Animated.View>
      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => {
          props.isFocused ? Keyboard.dismiss() : navigation.navigate("Home");
        }}
      >
        {props.isFocused ? (
          <Text style={styles.cancelText}>Cancel</Text>
        ) : (
          <Ionicons name="ios-close" size={wp("7.5%")} color="#313131" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    paddingLeft: wp("2%"),
    flexDirection: "row",
    marginVertical: hp("1%"),
  },
  searchBar: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  searchIcon: {
    position: "absolute",
    left: wp("4.5%"),
  },
  searchText: {
    height: wp("12%"),
    paddingLeft: wp("12%"),
    paddingRight: wp("12%"),
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4.5"),
    paddingTop: wp("1%"),
  },
  clearTextIcon: {
    position: "absolute",
    right: 0,
    paddingRight: wp("4.5%"),
    paddingLeft: wp("7%"),
    paddingVertical: wp("3.5%"),
  },
  cancelBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: wp("4.5%"),
    paddingRight: wp("4.5%"),
    width: wp("24%"),
    paddingTop: wp("1%"),
  },
  cancelText: {
    fontFamily: "AvenirNextRegular",
    color: "#707070",
    fontSize: wp("4.5%"),
  },
});

export default SearchBar;
