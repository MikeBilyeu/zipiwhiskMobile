import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
  setInputFocused,
  setParentCommentId,
} from "../../redux/actions/recipe";

import moment from "moment";

const Comment = ({ c, setInputFocused, setParentCommentId }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(c.liked);
  const [numLikes, setNumLikes] = useState(c.numLikes);

  const handleLikePress = () => {
    setLiked(!liked);
    liked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1);
  };

  return (
    <Pressable
      style={[
        styles.userCommentContainer,
        c.parent_comment_id && styles.userCommentContainerChild,
      ]}
    >
      <View style={styles.commentWrapper}>
        <Pressable onPress={() => navigation.navigate("VisitProfile")}>
          <Image
            style={[
              styles.userImage,
              c.parent_comment_id && styles.childUserImage,
            ]}
            source={{ uri: c.image_url }}
          />
        </Pressable>

        <Text
          style={[
            styles.commentText,
            c.parent_comment_id && styles.childCommentText,
          ]}
        >
          <Text
            style={[styles.commentText, { fontFamily: "AvenirNextDemiBold" }]}
            onPress={() => navigation.navigate("VisitProfile")}
          >
            {c.username + "  "}
          </Text>
          {c.comment}
        </Text>

        <Pressable
          onPress={handleLikePress}
          style={{
            alignSelf: "center",
          }}
          hitSlop={20}
        >
          <Ionicons
            name="heart"
            size={wp("3%")}
            color={liked ? "#FF2121" : "rgba(255,255,255,.2)"}
          />
        </Pressable>
      </View>

      <View
        style={[
          styles.commentInfoContainer,
          c.parent_comment_id && styles.childCommentInfoContainer,
        ]}
      >
        <Text style={styles.infoText}>{moment(c.created_at).fromNow()}</Text>

        {numLikes > 0 && (
          <Text style={styles.infoText}>
            {numLikes} Like{numLikes > 1 ? "s" : ""}
          </Text>
        )}

        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          hitSlop={10}
          onPress={() => {
            setParentCommentId(c.parent_comment_id || c.id);
            setInputFocused(true);
          }}
        >
          <Text style={styles.infoText}>Reply</Text>
        </Pressable>
      </View>
      {c.childComments &&
        !c.parent_comment_id &&
        c.childComments.map((item) => (
          <Comment
            key={item.id}
            c={item}
            setParentCommentId={setParentCommentId}
            setInputFocused={setInputFocused}
          />
        ))}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userCommentContainer: {
    paddingTop: wp("4%"),
  },
  userCommentContainerChild: {
    marginTop: 0,
    marginLeft: wp("10%"),
    marginVertical: 0,
  },
  commentWrapper: {
    flexDirection: "row",
  },
  userImage: {
    height: wp("8%"),
    width: wp("8%"),
    resizeMode: "stretch",
    borderRadius: 100,
    position: "absolute",
  },
  childUserImage: { height: wp("6%"), width: wp("6%") },
  commentText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    lineHeight: wp("4%"),
    paddingRight: wp("5%"),
    marginLeft: wp("10%"),
    paddingTop: wp(".5%"),
    flex: 1,
  },
  childCommentText: { marginLeft: wp("8%") },
  commentInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp("10%"),
    marginRight: wp("15%"),
    marginTop: wp("1.5%"),
    height: wp("3%"),
  },
  childCommentInfoContainer: {
    marginLeft: wp("8%"),
  },
  infoText: {
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
    opacity: 0.2,
  },
});

export default connect(null, {
  setParentCommentId,
  setInputFocused,
})(Comment);
