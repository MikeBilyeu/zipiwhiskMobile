import React from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import image from "../../assets/zipiwhisk.png";

const ZipiWhiskIcon = () => {
  return (
    <Image style={{ width: wp("18%"), height: wp("4%") }} source={image} />
  );
};
export default ZipiWhiskIcon;
