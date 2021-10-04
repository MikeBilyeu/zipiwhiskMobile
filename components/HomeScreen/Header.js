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
  console.log(props.user);
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["rgba(0,0,0,.8)", "transparent"]}
      start={[0, 0]}
      end={[0, 1]}
      style={styles.gradient}
    >
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.4}
        style={styles.headerBtn}
      >
        <Ionicons
          name="search"
          size={wp("8%")}
          color="#FFF"
          style={styles.headerBtnIcon}
        />
      </TouchableOpacity>
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
    height: wp("40%"),
    paddingTop: hp("5%"),
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
    width: wp("8%"),
    height: wp("8%"),
  },
  userIcon: {
    width: wp("9%%"),
    height: wp("9%"),
    borderRadius: 100,
    marginRight: 5,
    backgroundColor: "#fff",
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);
