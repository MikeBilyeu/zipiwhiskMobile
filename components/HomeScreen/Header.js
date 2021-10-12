import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = (props) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["rgba(0,0,0,.6)", "transparent"]}
      start={[0, 0]}
      end={[0, 1]}
      style={styles.gradient}
      onPress={() => console.log("pressed")}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        activeOpacity={0.4}
        style={styles.headerBtn}
      >
        <Ionicons
          name="search"
          size={wp("7%")}
          color="#FFF"
          style={styles.headerBtnIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.scrollTopBtn}
        onPress={props.handleScrollTop}
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        activeOpacity={0.4}
        style={styles.headerBtn}
      >
        <Image source={{ uri: props.user.image_url }} style={styles.userIcon} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: hp("15%"),
    paddingTop: hp("4%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: wp("15%"),
    height: wp("15%"),
    justifyContent: "center",
    alignItems: "center",
  },
  headerBtnIcon: {
    width: wp("7%"),
    height: wp("7%"),
  },
  scrollTopBtn: {
    flex: 1,
    height: wp("15%"),
  },
  userIcon: {
    width: wp("10%%"),
    height: wp("10%"),
    borderRadius: 100,
    marginRight: 5,
    backgroundColor: "#fff",
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);
