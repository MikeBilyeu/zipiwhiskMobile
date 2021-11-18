import React from "react";
import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const ActivityBtn = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Activity")}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, styles.btn]}
      hitSlop={{ top: 10, bottom: 25, left: 25, right: 10 }}
    >
      <BlurView intensity={95} tint={"dark"} style={styles.blur}>
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={wp("7%")}
          color="#fff"
        />
      </BlurView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    position: "absolute",
    bottom: hp("2%"),
    left: wp("2%"),
    overflow: "hidden",
  },
  blur: {
    width: wp("16%"),
    height: wp("16%"),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActivityBtn;
