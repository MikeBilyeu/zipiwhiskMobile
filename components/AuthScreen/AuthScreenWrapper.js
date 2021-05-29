import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  View,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AuthScreenWrapper(props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
            source={require("../../assets/zipiwhisk.png")}
            style={{ height: wp("14%") }}
            resizeMode="contain"
          />
          <Text style={styles.header}>{props.headerText}</Text>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  header: {
    marginBottom: hp("6%"),
    color: "#313131",
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextRegular",
  },
});

export default AuthScreenWrapper;
