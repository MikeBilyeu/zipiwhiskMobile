import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { selectSearchFilter } from "../../redux/reducers/searchReducer";
import { searchChange } from "../../redux/actions/search";

const SearchBar = (props) => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
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
          color={isFocused ? "#313131" : "#B7B7B7"}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchText}
          placeholder="Search"
          returnKeyType="search"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={props.searchFilter}
          onChangeText={(text) => props.searchChange(text)}
          onSubmitEditing={handleSubmit}
        />
        {isFocused && props.searchFilter !== "" && (
          <Ionicons
            name="close"
            size={wp("5%")}
            color="#707070"
            style={styles.clearTextIcon}
            onPress={() => props.searchChange("")}
          />
        )}
      </Animated.View>
      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => {
          isFocused ? Keyboard.dismiss() : navigation.navigate("Home");
        }}
      >
        {isFocused ? (
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

const mapStateToProps = (state) => ({
  searchFilter: selectSearchFilter(state),
});

export default connect(mapStateToProps, { searchChange })(SearchBar);
