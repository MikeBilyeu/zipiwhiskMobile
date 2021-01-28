import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";

const CategoryBtn = ({ name }) => {
  return (
    <TouchableOpacity style={styles.btnWrapper} onPress={null}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

const SearchDropDown = ({ dropDownOpen }) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [mount, setMount] = useState(false);

  const dropDownValue = useRef(new Animated.Value(-600)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (dropDownOpen && !mount) {
      setMount(true);
      Animated.spring(dropDownValue, {
        toValue: -10,
        friction: 8,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 300,
        delay: 100,
        useNativeDriver: true,
      }).start();
    }
    if (!dropDownOpen && mount) {
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
      Animated.timing(dropDownValue, {
        toValue: -600,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMount(false));
    }
  });

  const dropDownAnimationStyle = {
    transform: [{ translateY: dropDownValue }],
  };

  const opacityAnimationStyle = { opacity: opacityValue };
  const darkBackgroundAnimationStye = {
    opacity: opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
    }),
  };

  return (
    mount && (
      <View style={styles.container}>
        <Animated.View
          style={[styles.darkBackground, darkBackgroundAnimationStye]}
        />
        <Animated.View style={[styles.dropDown, dropDownAnimationStyle]}>
          <Animated.View style={[styles.searchWrapper, opacityAnimationStyle]}>
            <Image
              source={require("../assets/search.png")}
              style={[styles.searchIcon]}
            />
            <TextInput
              style={styles.searchText}
              placeholder="Search"
              returnKeyType="search"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              defaultValue={search}
              onChangeText={(text) => setSearch(text)}
            />
          </Animated.View>
          {!isFocused && (
            <>
              <Animated.View
                style={[styles.categoryContainer, opacityAnimationStyle]}
              >
                <TextInput editable={false} style={styles.containerTitle}>
                  Categories
                </TextInput>
                <View style={styles.btnContainer}>
                  <CategoryBtn name="Breakfast" />
                  <CategoryBtn name="Lunch" />
                  <CategoryBtn name="Dinner" />
                  <CategoryBtn name="Dessert" />
                  <CategoryBtn name="Beverage" />
                </View>
              </Animated.View>
              <Image
                source={require("../assets/line.png")}
                style={{ width: 60, height: 4 }}
              />
            </>
          )}
        </Animated.View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  darkBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(0,0,0)",
    opacity: 0.5,
    position: "absolute",
  },
  dropDown: {
    paddingTop: 85,
    paddingBottom: 15,
    backgroundColor: "#FFF",
    width: "100%",
    height: 500,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 50 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
  },
  searchWrapper: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 15,
    opacity: 0.5,
  },
  searchText: {
    height: 50,
    paddingLeft: 50,
    fontFamily: "AvenirNextRegular",
    fontSize: 20,
    paddingTop: 3,
  },

  categoryContainer: {
    width: "100%",
    flex: 1,
  },
  containerTitle: {
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    color: "#B7B7B7",
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
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
});

export default SearchDropDown;
