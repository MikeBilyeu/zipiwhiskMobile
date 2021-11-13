import React from "react";
import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "./Header";

const ScreenHeader = (props) => {
  const navigation = useNavigation();
  return (
    <Header>
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
            size={wp("6.5%")}
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
    </Header>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: hp("10%"),
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerBtn: {
    height: hp("7%"),
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
    fontSize: wp("5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#313131",
    marginBottom: hp(".5%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  subTitleText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.5"),
    color: "#313131",
  },
});

export default ScreenHeader;
