import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Notification from "./Notification";
import ToggleFollowBtn from "../ToggleFollowBtn";
import RecipeThumbnailBtn from "./RecipeThumbnailBtn";

const renderItem = ({ item }) => {
  switch (item.type) {
    case "follow":
      return (
        <Notification data={item} text="Followed you.">
          <ToggleFollowBtn id={item.id} isFollowing={item.isFollowing} />
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
          <RecipeThumbnailBtn media_url={item.media_url} />
        </Notification>
      );
    default:
      return null;
  }
};

const ActivityScroll = (props) => {
  return props.isLoading ? (
    <ActivityIndicator style={{ top: wp("20%") }} />
  ) : (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={{
        paddingHorizontal: wp("2%"),
        paddingBottom: wp("5%"),
      }}
      data={props.data}
      numColumns={1}
      renderItem={renderItem}
      keyExtractor={(item, i) => i.toString()}
      onRefresh={props.onRefresh}
      refreshing={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: { backgroundColor: "#fff" },
});

export default ActivityScroll;
