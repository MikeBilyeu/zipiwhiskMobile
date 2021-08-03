import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ModalComponent = (props) => {
  return (
    props.modalVisible && (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          hardwareAccelerated={true}
        >
          <View style={styles.wrapper}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{props.modalText}</Text>
              {props.children}
              <TouchableOpacity
                style={[styles.btn, styles.cancelBtn]}
                onPress={() => props.setModalVisible(false)}
              >
                <Text style={[styles.btnText, styles.cancelBtnText]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.3)",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: hp("15%"),
    flex: 1,
  },
  modalView: {
    width: "95%",
    margin: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    paddingVertical: hp("3%"),
    width: "100%",
    elevation: 2,
  },

  cancelBtn: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    position: "absolute",
    bottom: -90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cancelBtnText: {
    color: "#0172C4",
  },
  btnText: {
    fontSize: wp("4%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },
  modalText: {
    marginBottom: hp("4%"),
    textAlign: "center",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextRegular",
  },
});

export default ModalComponent;
