import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
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
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            props.setModalVisible(!props.modalVisible);
          }}
        >
          <View style={styles.wrapper}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{props.modalText}</Text>
              {props.children}
              <Pressable
                style={[styles.btn, styles.cancelBtn]}
                onPress={() => props.setModalVisible(!props.modalVisible)}
              >
                <Text style={[styles.btnText, styles.cancelBtnText]}>
                  Cancel
                </Text>
              </Pressable>
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
    marginBottom: hp("10%"),
    flex: 1,
  },
  modalView: {
    width: "95%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  cancelBtn: {
    //backgroundColor: "#2196F3",
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
    marginBottom: 15,
    textAlign: "center",
    fontSize: wp("4.5%"),
    fontFamily: "AvenirNextRegular",
  },
});

export default ModalComponent;
