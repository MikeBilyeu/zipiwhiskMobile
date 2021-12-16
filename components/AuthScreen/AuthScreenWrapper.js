import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import image from "../../assets/zipiwhisk.png";

const AuthScreenWrapper = (props) => (
  <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <Image
          source={image}
          style={{ height: wp("14%") }}
          resizeMode="contain"
        />
        <Text style={styles.header}>{props.headerText}</Text>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>
);

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
    marginTop: hp(".5%"),
    marginBottom: hp("4%"),
    color: "#313131",
    fontSize: wp("6%"),
    fontFamily: "AvenirNextRegular",
  },
});

export default AuthScreenWrapper;
