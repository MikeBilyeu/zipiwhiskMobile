import React from "react";
import { TouchableOpacity, Image } from "react-native";
import defaultImage from "../assets/userImage.png";

const UserImageBtn = (props) => (
  <TouchableOpacity onPress={props.handleImagePress} activeOpacity={0.5}>
    <Image
      style={[{ borderRadius: 50 }, props.styles]}
      source={props.uri ? { uri: props.uri } : defaultImage}
    />
  </TouchableOpacity>
);

export default UserImageBtn;
