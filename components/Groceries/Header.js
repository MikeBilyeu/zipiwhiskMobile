import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({ inputField }) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardOpen(true);
    });

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow");
    };
  }, []);

  return (
    <LinearGradient
      colors={["#fff", "rgba(255, 255, 255, .9)"]}
      start={[0, 0]}
      end={[0, 1]}
      style={[styles.headerContainer]}
    >
      <Image
        source={require("../../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{"Groceries"}</Text>
        {keyboardOpen && (
          <TouchableOpacity
            style={styles.doneBtn}
            onPress={() => {
              setKeyboardOpen(false);
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.doneBtnText}>Done</Text>
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
    height: 65,
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
