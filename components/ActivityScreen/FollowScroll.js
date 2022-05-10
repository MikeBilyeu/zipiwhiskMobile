import { isLoaded } from "expo-font";
import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Users from "./Users";

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    name={item.fullname}
    image={item.image_url}
    isFollowing={item.isFollowing}
    id={item.id}
  />
);

const FollowScreen = (props) => {
  return props.isLoading ? (
    <ActivityIndicator style={{ top: wp("20%") }} />
  ) : (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={{ paddingTop: wp("2.5%") }}
      data={props.users}
      renderItem={renderUsers}
      keyExtractor={(item) => item.id.toString()}
      onRefresh={props.onRefresh}
      refreshing={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#fff",
  },
});

export default FollowScreen;
