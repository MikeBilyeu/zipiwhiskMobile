import React from "react";
import { TouchableOpacity, Image } from "react-native";

const UserImageBtn = (props) => (
  <TouchableOpacity onPress={props.handleImagePress} activeOpacity={0.5}>
    <Image
      style={{ width: 65, height: 65, borderRadius: 50 }}
      source={{ uri: props.uri }}
    />
  </TouchableOpacity>
);

export default UserImageBtn;
