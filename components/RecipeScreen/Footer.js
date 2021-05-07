import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { parseNum } from "../utils";

const screenHeight = Dimensions.get("screen").height;

const Footer = (props) => {
  const [saved, setSaved] = useState(false);
  const navigation = useNavigation();
  return (
    <Animated.View style={[styles.footerConatiner, props.styles]}>
      <LinearGradient
        colors={["rgba(0,0,0,.5)", "transparent"]}
        start={[0, 1]}
        end={[0, 0]}
        style={styles.gradientWrapper}
      >
        <View style={styles.footerBtnContainer}>
          <TouchableOpacity
            onPress={() => navigation.push("VisitProfile")}
            activeOpacity={0.4}
            style={[styles.footerBtn, { paddingHorizontal: 5 }]}
          >
            <Image source={{ uri: props.userImage }} style={styles.userIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSaved(!saved)}
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Text style={styles.footerBtnText}>{parseNum(props.numLikes)}</Text>
            <Ionicons
              name="heart"
              size={wp("7%")}
              color={saved ? "#DE4949" : "#FFF"}
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Comments", { title: props.title })
            }
            activeOpacity={0.4}
            style={styles.footerBtn}
          >
            <Text style={styles.footerBtnText}>
              {parseNum(props.numComments)}
            </Text>
            <Ionicons
              name="chatbubble-ellipses"
              size={wp("7%")}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateRecipe")}
            activeOpacity={0.4}
            style={[styles.footerBtn]}
          >
            <Ionicons
              name="pencil"
              size={wp("7%")}
              color="#FFF"
              style={styles.footerBtnIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.footerBtnContainer}></View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footerConatiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: wp("70%"),
    marginTop: screenHeight - wp("70%"),
    width: "100%",
    position: "absolute",
  },
  gradientWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: wp("7%"),
    width: "100%",
  },

  footerBtnContainer: {
    height: "100%",
    width: wp("15%"),
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  footerBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: wp("10%"),
    flex: 1,
  },
  footerBtnText: {
    color: "#FFF",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.5%"),
  },
  footerBtnIcon: {
    width: wp("7%"),
    height: wp("7%"),
  },
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 100,
  },
});

export default Footer;
