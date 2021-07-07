import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ZipiWhiskIcon from "../Header/ZipiWhiskIcon";

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.4}
          style={styles.headerBtn}
        >
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            {props.title}
          </Text>
          <Text style={styles.subTitleText}>{props.subTitle}</Text>
        </View>
        {(
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={props.handleSavePress}
            disabled={props.isLoading}
          >
            <Text
              style={[
                styles.saveBtnText,
                props.isLoading && styles.saveBtnTextLoading,
              ]}
            >
              {props.isLoading ? "Saving" : "Save"}
            </Text>
          </TouchableOpacity>
        ) || <View style={styles.headerBtn} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    height: hp("12%"),
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBtn: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
  },
  titleWrapper: {
    flex: 6,
    height: 60,
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("6%"),
    color: "#313131",
    marginBottom: 2,
  },
  subTitleText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.5"),
    color: "#313131",
  },
  btnText: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4%"),
  },
  saveBtnText: {
    color: "#0172C4",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
  },
  saveBtnTextLoading: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
  },
});

export default Header;
