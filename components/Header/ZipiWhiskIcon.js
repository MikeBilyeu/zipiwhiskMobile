import React from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ZipiWhiskIcon = () => (
  <Image
    source={require("../../assets/zipiwhisk.png")}
    style={{ width: wp("18%"), height: wp("4%") }}
  />
);

export default ZipiWhiskIcon;
