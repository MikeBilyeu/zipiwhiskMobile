import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { connect } from "react-redux";
import { setOpenComments } from "../../redux/actions/recipe";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = (props) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    props.setOpenComments(false);
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={["rgba(30,30,30, 0)", "rgba(0,0,0,.75)"]}
      start={[0, 1]}
      end={[0, -1.5]}
      style={styles.gradient}
    >
      <Pressable
        onPress={handleBackPress}
        hitSlop={{ bottom: 15, right: 15 }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.headerBtn,
        ]}
      >
        <Ionicons name="chevron-back" size={wp("6.5%")} color="#fff" />
      </Pressable>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Text>
        {props.subTitle && (
          <Text
            style={styles.subTitleText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.subTitle}
          </Text>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: hp("20%"),
    paddingTop: hp("4%"),
    flexDirection: "row",
    justifyContent: "center",
  },
  headerBtn: {
    width: wp("20%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: hp("5%"),
  },
  headerBtnIcon: {
    width: wp("4%"),
    height: wp("4%"),
  },
  titleWrapper: {
    height: wp("15%"),
    justifyContent: "center",
    marginTop: hp("1%"),
  },
  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("4%"),
    color: "#fff",
    marginBottom: 2,
  },
  subTitleText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.5"),
    color: "#fff",
  },
});

export default connect(null, { setOpenComments })(Header);
