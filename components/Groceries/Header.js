import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Text,
  Share,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import ZipiWhiskIcon from "../Header/ZipiWhiskIcon";

const Header = ({
  inputFocused,
  setInputFocused,
  list,
  setList,
  swipeIsOpen,
  setSwipeIsOpen,
}) => {
  const onShare = async (data) => {
    try {
      const result = await Share.share({
        message:
          "ZipiWhisk | Groceries \n" + list.map((i) => i.ingredient).join("\n"),
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <ZipiWhiskIcon />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{"Groceries"}</Text>
        {swipeIsOpen ? (
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => {
              setList([]);
              setInputFocused(false);
              Keyboard.dismiss();
              setSwipeIsOpen(false);
            }}
          >
            <Text style={styles.btnText}>Clear list</Text>
          </TouchableOpacity>
        ) : inputFocused ? (
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => {
              setInputFocused(false);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.doneBtn} onPress={onShare}>
            <Ionicons name="share-outline" size={wp("6%")} color="#0172C4" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 1,
    height: wp("18%"),
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleText: {
    textAlign: "left",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("7%"),
    color: "#313131",
    marginHorizontal: wp("3%"),
    flex: 3,
  },

  doneBtn: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  btnText: {
    color: "#0172C4",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4%"),
  },
  bottomLine: {
    width: "100%",
    height: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
  },
});

export default Header;
