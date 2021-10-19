import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
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
    <View style={styles.container}>
      <ScreenHeader
        title={`@${props.route.params.username}`}
        subTitle={`${props.route.params.screen} (${props.route.params.num})`}
      />
      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={renderUsers}
        keyExtractor={(item) => item.id.toString()}
      />
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
  listContainer: {
    flex: 1,
    paddingTop: 20,
    width: "100%",
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
    id: 10,
    username: "jess99",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    Following: false,
  },
  {
    id: 10,
    username: "jackie93",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    Following: false,
  },
];
