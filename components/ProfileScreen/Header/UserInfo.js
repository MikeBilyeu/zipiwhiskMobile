import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.userInfoContainer}>
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.5}
        style={styles.userImageWrapper}
      >
        <Image
          style={{ width: 65, height: 65, borderRadius: 50 }}
          source={{ uri: data.user.image }}
        />
      </TouchableOpacity>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>{data.user.username}</Text>
        <Text style={styles.fullNameText}>{data.user.fullName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateRecipe")}
        activeOpacity={0.5}
        style={styles.createRecipeBtn}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../../../assets/createRecipe.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  userImageWrapper: {},
  usernameContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 35,
    flex: 1,
  },
  createRecipeBtn: {
    height: 65,
    width: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  usernameText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  fullNameText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
  },
});

export default UserInfo;

const data = {
  user: {
    id: 480348487,
    username: "mr_smith512",
    fullName: "Bob Smith",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "mikebilyeu500@gmail.com",
    recipeUnit: "US",
    restriction: null,
  },
};
