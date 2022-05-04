import React from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Notification from "./Notification";
import ToggleFollowBtn from "../ToggleFollowBtn";
import RecipeThumbnailBtn from "./RecipeThumbnailBtn";

import { data } from "./data";

const renderItem = ({ item }) => {
  switch (item.type) {
    case "follow":
      return (
        <Notification data={item} text="Followed you.">
          <ToggleFollowBtn id={item.user.id} following={item.user.following} />
        </Notification>
      );
    case "like":
      return (
        <Notification data={item} text="Liked your recipe.">
          <RecipeThumbnailBtn media_url={item.media_url} />
        </Notification>
      );
    case "save":
      return (
        <Notification data={item} text="Saved your recipe.">
          <RecipeThumbnailBtn media_url={item.media_url} />
        </Notification>
      );
    case "mention":
      return (
        <Notification
          data={item}
          text={`Mentioned you in a comment: ${item.comment}`}
          textStyles={{ textAlign: "left" }}
        >
          <RecipeThumbnailBtn media_url={item.recipe.media_url} />
        </Notification>
      );
    default:
      return null;
  }
};

const ActivityScroll = () => (
  <FlatList
    style={styles.listContainer}
    contentContainerStyle={{ paddingHorizontal: wp("2%") }}
    data={data}
    numColumns={1}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
  />
);

const styles = StyleSheet.create({
  listContainer: { backgroundColor: "#fff" },
});

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(ActivityScroll);
