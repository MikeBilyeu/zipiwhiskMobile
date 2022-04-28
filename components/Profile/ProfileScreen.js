import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import ProfileHeader from "./Header/ProfileHeader";
import ProfileTab from "./ProfileTab";

const ProfileScreen = () => (
  <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
    <ProfileHeader />
    <ProfileTab />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default ProfileScreen;
