import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

const SelectInput = (props) => {
  const [focus, setFocus] = useState(false);

  return (
    <RNPickerSelect
      onOpen={() => setFocus(true)}
      onClose={() => setFocus(false)}
      value={props.value}
      style={styles}
      placeholder={{}}
      onValueChange={(value) => props.handleChange(value)}
      items={props.items}
      Icon={() => (
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name={props.iconName}
            size={wp("5.5%")}
            color={focus ? "#313131" : "#B7B7B7"}
          />
          <Ionicons
            name="chevron-down"
            size={wp("5.5%")}
            color={focus ? "#313131" : "#B7B7B7"}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  inputIOS: {
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#F2F2F2",
    backgroundColor: "#F2F2F2",
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4.5%"),
    lineHeight: wp("4.5%"),
    width: "95%",
    marginHorizontal: 10,
    marginVertical: 5,
    height: wp("13%"),
    paddingLeft: wp("14%"),
  },
  inputAndroid: {
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#F2F2F2",
    backgroundColor: "#F2F2F2",
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("4.5%"),
    lineHeight: wp("4.5%"),
    width: "95%",
    marginHorizontal: 10,
    marginVertical: 5,
    height: wp("13%"),
    paddingLeft: wp("14%"),
  },
  iconContainer: {
    top: 18,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
});

export default SelectInput;
