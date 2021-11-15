import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ScreenHeader from "../ScreenHeader";
import Users from "./Users";

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    image={item.image}
    Following={item.Following}
    id={item.id}
  />
);

const FollowScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        subTitle={`@${props.route.params.username}`}
        title={`${props.route.params.screen} (${props.route.params.num})`}
      />
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderUsers}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  listContainer: {
    flex: 1,
    position: "absolute",
    paddingTop: hp("11%"),
    top: hp("5%"),
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default FollowScreen;

const data = [
  {
    id: 10,
    username: "zipiwhiskuser943",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    Following: false,
  },
  {
    id: 9,
    username: "jess99",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    Following: false,
  },
  {
    id: 5,
    username: "jackie93",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    Following: false,
  },
];
