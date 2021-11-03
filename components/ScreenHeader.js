import React from "react";
import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ScreenHeader = (props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerWrapper}>
        <Pressable
          onPress={() =>
            props.goBackScreen
              ? navigation.navigate(props.goBackScreen)
              : navigation.goBack()
          }
          hitSlop={{ bottom: 15 }}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1, alignItems: "flex-start" },
            styles.headerBtn,
          ]}
        >
          <Ionicons
            name="chevron-back"
            size={wp("8%")}
            color="#313131"
            style={{ paddingRight: wp("7%") }}
          />
        </Pressable>

        <View style={styles.titleWrapper}>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            {props.title}
          </Text>
          <Text style={styles.subTitleText}>{props.subTitle}</Text>
        </View>
        {props.children || <View style={styles.headerBtn} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 1,
    height: hp("12%"),
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomWidth: 0.25,
    borderBottomColor: "#E3E3E3",
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
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
    fontSize: wp("5%"),
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

export default ScreenHeader;
