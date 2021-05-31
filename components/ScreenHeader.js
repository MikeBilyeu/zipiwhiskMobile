import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ZipiWhiskIcon from "./Header/ZipiWhiskIcon";

function ScreenHeader(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <ZipiWhiskIcon />

      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.4}
          style={styles.headerBtn}
        >
          <Image
            source={require("../assets/arrow.png")}
            style={{
              width: wp("4%"),
              height: wp("4%"),
              transform: [{ rotate: "90deg" }],
            }}
          />
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
            onPress={() => {
              //setInputFocused(false);
              //Keyboard.dismiss();
              console.log("Save Changes");
            }}
          >
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        ) || <View style={styles.headerBtn} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
    height: wp("30%"),
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

  saveBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    borderWidth: 0.5,
  },
  saveBtnText: {
    color: "#0172C4",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4.5%"),
  },
});

export default ScreenHeader;
