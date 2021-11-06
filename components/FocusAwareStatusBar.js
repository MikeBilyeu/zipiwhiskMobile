import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

const FocusAwareStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
