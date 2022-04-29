import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useIsFocused } from "@react-navigation/native";
import ProfileHeader from "./Header/ProfileHeader";
import ProfileTab from "./ProfileTab";

const ProfileScreen = (props) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      console.log("Screen Has Focus");
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <ProfileHeader />
      <ProfileTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
export default ProfileScreen;
