import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
  Text,
  Share,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ inputFocused, setInputFocused, list }) => {
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
    <LinearGradient
      colors={["#fff", "rgba(255, 255, 255, .9)"]}
      start={[0, 0]}
      end={[0, 1]}
      style={styles.headerContainer}
    >
      <Image
        source={require("../../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{"Groceries"}</Text>
        {inputFocused ? (
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => {
              setInputFocused(false);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.doneBtnText}>Done</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.doneBtn} onPress={onShare}>
            <Ionicons name="paper-plane-outline" size={25} color="#0172C4" />
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 2,
    position: "absolute",
    zIndex: 1,
    height: 75,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
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
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
    flex: 3,
  },
  doneBtn: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  doneBtnText: {
    color: "#0172C4",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 18,
  },
});

export default Header;
