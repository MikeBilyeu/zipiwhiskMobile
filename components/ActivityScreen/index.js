import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ActivityHeader from "./ActivityHeader";

import ActivityTab from "./ActivityTab";

const Activity = () => (
  <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
    <ActivityHeader />
    <ActivityTab />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default Activity;
