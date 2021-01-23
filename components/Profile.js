import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import RecipeCard from "./RecipeCard";
import data from "../data";

function Header({ data }) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
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
            source={require("../assets/createRecipe.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={null}
        activeOpacity={0.5}
        style={styles.searchBtn}
      >
        <Image
          source={require("../assets/search.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.searchBtnText}>{"Likes"}</Text>
        <Image
          source={require("../assets/arrow.png")}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}
function Profile() {
  const renderItem = ({ item }) => <RecipeCard data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header data={userData} />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    paddingTop: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

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
    fontSize: 18,
    fontFamily: "AvenirNextBold",
    color: "#464646",
  },
  fullNameText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#464646",
  },
  searchBtn: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomColor: "#E3E3E3",
    borderBottomWidth: 0.5,
  },

  searchBtnText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});

export default Profile;

const userData = {
  user: {
    id: 480348487,
    username: "mikebilyeu512",
    fullName: "Mike Bilyeu",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "mikebilyeu500@gmail.com",
    recipeUnit: "US",
    restriction: null,
  },
};
