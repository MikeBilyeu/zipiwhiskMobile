import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import ScreenHeader from "../ScreenHeader";
import Users from "./Users";

const renderUsers = ({ item }) => (
  <Users
    username={item.username}
    image={item.image}
    Following={item.Following}
  />
);

const FollowScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader
        title={props.route.params.screen}
        subTitle={`${props.route.params.num} - ${props.route.params.username}`}
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
    paddingHorizontal: 10,
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
    id: 324832904,
    username: "zipiwhiskuser943",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    Following: false,
  },
  {
    id: 961929556664333,
    username: "jess99",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    Following: false,
  },
  {
    id: 96675566622913,
    username: "jackie93",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    Following: false,
  },
];
