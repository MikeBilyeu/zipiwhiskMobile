import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { connect } from "react-redux";
import { selectImageUrl } from "../../redux/reducers/userFormReducer";
import { selectEmail } from "../../redux/reducers/userReducer";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { logout } from "../../redux/actions/auth";

import UserImageBtn from "../UserImageBtn";

const ImageAndLogout = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.center}>
          <UserImageBtn
            uri={props.imageUrl}
            styles={{
              width: wp("25%"),
              height: wp("25%"),
              borderRadius: wp("1%"),
            }}
            handleImagePress={() => props.setModalVisible(true)}
          />
          <Text style={styles.imageBtnText}>Change Image</Text>
        </View>
        <View style={styles.emailWrapper}>
          <Text style={styles.email}>{props.email}</Text>
          <Pressable style={styles.logoutBtn} onPress={props.logout}>
            <Text style={styles.logoutBtnText}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  wrapper: {
    width: "95%",
    flexDirection: "row",
    marginBottom: hp("3%"),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageBtnText: {
    color: "#0172C4",
    fontSize: wp("3%"),
    textAlign: "center",
    fontFamily: "AvenirNextRegular",
    marginTop: wp("1%"),
  },
  emailWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
    height: hp("12%"),
  },
  email: {
    color: "#464646",
    fontSize: wp("4%"),
    textAlign: "center",
    fontFamily: "AvenirNextDemiBold",
  },
  logoutBtn: {
    borderWidth: 0.5,
    borderColor: "#0172C4",
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 5,
    width: wp("35%"),
  },
  logoutBtnText: {
    color: "#0172C4",
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextDemiBold",
    textAlign: "center",
  },
});
const mapStateToProps = (state) => ({
  imageUrl: selectImageUrl(state),
  email: selectEmail(state),
});

export default connect(mapStateToProps, { logout })(ImageAndLogout);
