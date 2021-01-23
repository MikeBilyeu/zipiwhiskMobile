import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />

      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.4}
          style={styles.headerBtn}
        >
          <Image
            source={require("../assets/arrow.png")}
            style={{ width: 20, height: 20, transform: [{ rotate: "90deg" }] }}
          />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{"Create Recipe"}</Text>
          <Text style={styles.subTitleText}>{"Recipe Info"}</Text>
        </View>

        <TouchableOpacity
          onPress={null}
          activeOpacity={0.4}
          style={styles.headerBtn}
        >
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function CreateRecipe() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
    borderBottomWidth: 0.5,
    borderBottomColor: "#E3E3E3",
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  titleWrapper: {},

  titleText: {
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 25,
    color: "#313131",
  },
  subTitleText: {
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    fontSize: 14,
    color: "#313131",
  },

  postText: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 18,
    color: "#0172C4",
  },
  list: {
    flex: 1,
  },
});

export default CreateRecipe;
