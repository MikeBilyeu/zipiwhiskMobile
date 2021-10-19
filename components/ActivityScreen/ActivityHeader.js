import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import Header from "../Header";

function ActivityHeader() {
  const navigation = useNavigation();
  return (
    <Header>
      <View style={styles.Container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.4}
          style={styles.backBtn}
        >
          <Image
            source={require("../../assets/arrow.png")}
            style={{
              width: wp("5%"),
              height: wp("5%"),
              transform: [{ rotate: "-90deg" }],
            }}
          />
        </TouchableOpacity>

        <Text style={styles.titleText}>Activity</Text>

        <View style={{ width: wp("12%"), height: wp("12%") }} />
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginTop: 5,
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
