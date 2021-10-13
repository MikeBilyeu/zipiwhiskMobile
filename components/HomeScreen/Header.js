import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
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
    >
      <Pressable
        onPress={() => navigation.navigate("Search")}
        hitSlop={{ bottom: 15 }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.headerBtn,
        ]}
      >
        <Ionicons
          name="search"
          size={wp("7%")}
          color="#FFF"
          style={styles.headerBtnIcon}
        />
      </Pressable>
      <Pressable
        style={styles.scrollTopBtn}
        hitSlop={{ bottom: 15 }}
        onPress={props.handleScrollTop}
      />
      <Pressable
        onPress={() => navigation.navigate("Profile")}
        hitSlop={{ bottom: 15 }}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1 },
          styles.headerBtn,
        ]}
      >
        <Image source={{ uri: props.user.image_url }} style={styles.userIcon} />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: hp("20%"),
    paddingTop: hp("4%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: wp("20%"),
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
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Header);
