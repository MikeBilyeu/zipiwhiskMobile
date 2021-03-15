import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ScreenHeader(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />

      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.4}
          style={styles.headerBtn}
        >
          <Image
            source={require("../assets/arrow.png")}
            style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }] }}
          />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.subTitleText}>{props.subTitle}</Text>
        </View>
        {props.children || <View style={styles.headerBtn} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    height: 120,
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  titleWrapper: {
    flex: 8,
  },
  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 25,
    color: "#313131",
    marginBottom: 2,
  },
  subTitleText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: 14,
    color: "#313131",
  },
});

export default ScreenHeader;
