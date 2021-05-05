import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import ScreenHeader from "../ScreenHeader";
import Input from "../Input";
import UserImageBtn from "../UserImageBtn";

const SettingsScreen = (props) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  return (
    <View style={styles.container}>
      <ScreenHeader title="Settings" subTitle="Profile" />
      <View style={styles.wrapper}>
        <UserImageBtn
          handleImagePress={null}
          uri={"https://randomuser.me/api/portraits/men/32.jpg"}
        />
        <Text>mrsmith28@gmail.com</Text>
        <Input
          value={username}
          handleChange={setUsername}
          placeholder="Username"
          textContentType="username"
          iconName="person"
        />
        <Input
          value={fullName}
          handleChange={setFullName}
          placeholder="Full Name"
          textContentType="name"
          iconName="document-text"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: 25,
    width: "100%",
    flex: 1,
  },
});

export default SettingsScreen;
