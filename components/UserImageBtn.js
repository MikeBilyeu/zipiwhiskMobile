import React from "react";
import { TouchableOpacity, Image } from "react-native";

const UserImageBtn = (props) => (
  <TouchableOpacity onPress={props.handleImagePress} activeOpacity={0.5}>
    <Image
      style={[{ borderRadius: 50 }, props.styles]}
      source={{ uri: props.uri }}
    />
  </TouchableOpacity>
);

export default UserImageBtn;
