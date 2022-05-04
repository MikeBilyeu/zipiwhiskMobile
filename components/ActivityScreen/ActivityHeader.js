import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "../Header";

function ActivityHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={{ bottom: 15 }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1, alignItems: "flex-start" },
          styles.backBtn,
        ]}
      >
        <Ionicons
          name="chevron-back"
          size={wp("6.5%")}
          color="#313131"
          style={{ paddingRight: wp("7%") }}
        />
      </Pressable>

      <Text style={styles.titleText}>Activity</Text>

      <View style={{ width: wp("12%"), height: wp("12%") }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginTop: wp("1%"),
  },
  titleText: {
    textAlign: "center",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backBtn: {
    height: wp("12%"),
    width: wp("12%"),
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default ActivityHeader;
