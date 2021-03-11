import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import ScreenHeader from "../ScreenHeader";

const renderUsers = ({ item }) => {
  return null;
};

const FollowScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title={props.route.params.screen}
        subTitle={`${props.route.params.num} - ${props.route.params.username}`}
      />
      <FlatList
        data={null}
        renderItem={renderUsers}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
});

export default FollowScreen;
