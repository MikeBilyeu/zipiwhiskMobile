import React from "react";
import { StyleSheet, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Users from "./Users";

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    name={item.name}
    image={item.image}
    Following={item.Following}
    id={item.id}
  />
);

const FollowScreen = () => {
  return (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={{ paddingTop: wp("2.5%") }}
      data={data}
      renderItem={renderUsers}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#fff",
  },
});

export default FollowScreen;

const data = [
  {
    id: 10,
    username: "zipiwhiskuser943",
    name: "zipiwhisk user",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    Following: false,
  },
  {
    id: 9,
    username: "jess99",
    name: "zipiwhisk user2",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    Following: false,
  },
  {
    id: 5,
    username: "jackie93",
    name: "zipiwhisk user",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    Following: false,
  },
];
