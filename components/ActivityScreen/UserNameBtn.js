import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const UserNameBtn = ({ id, username, name, image_url }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() => navigation.push("VisitProfile", { id })}
    >
      <Image style={styles.userImage} source={{ uri: image_url }} />
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={[styles.text, styles.username]}>{`@${username}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginRight: wp("2%"),
  },
  userImage: {
    height: wp("11%"),
    width: wp("11%"),
    marginRight: wp("2.5%"),
    marginLeft: 0,
    resizeMode: "cover",
    borderRadius: wp("100%"),
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
  text: {
    color: "#313131",
    fontFamily: "AvenirNextDemiBold",
    fontSize: wp("3.2%"),
    marginVertical: wp(".25%"),
  },
  username: {
    color: "#B7B7B7",
  },
});

export default UserNameBtn;
