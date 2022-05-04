import React from "react";
import { Image, Pressable } from "react-native";
import defaultImage from "../assets/userImage.png";

const UserImageBtn = (props) => (
  <Pressable
    onPress={props.handleImagePress}
    style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    hitSlop={20}
  >
    <Image
      style={[{}, props.styles]}
      source={props.uri ? { uri: props.uri } : defaultImage}
    />
  </Pressable>
);

export default UserImageBtn;
