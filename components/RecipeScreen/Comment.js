import React, { useState } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
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
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VisitProfile")}
        >
          <Image style={styles.userImage} source={{ uri: c.image_url }} />
        </TouchableWithoutFeedback>

        <View style={[styles.commentWrapperText]}>
          <Text style={styles.commentText}>
            <Text
              style={[styles.commentText, { fontFamily: "AvenirNextDemiBold" }]}
              onPress={() => navigation.navigate("VisitProfile")}
            >
              {c.username + "  "}
            </Text>
            {c.comment}
          </Text>
        </View>
      </View>

      <View style={styles.commentInfoContainer}>
        <Text style={[styles.infoText, { color: "rgba(255,255,255, .3)" }]}>
          {moment(c.created_at).fromNow()}
        </Text>

        <Pressable
          onPress={handleLikePress}
          style={{
            flexDirection: "row",
            width: wp("25%"),
            alignItems: "center",
          }}
          hitSlop={10}
        >
          <Ionicons
            name="heart"
            size={wp("3%")}
            color={liked ? "#FF2121" : "#464646"}
            style={{
              width: wp("3%"),
              height: wp("4%"),
              marginRight: wp("1%"),
            }}
          />
          {numLikes > 0 && (
            <Text style={styles.infoText}>
              {numLikes} Like{numLikes > 1 ? "s" : ""}
            </Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => {
            setParentCommentId(c.id);
            setInputFocused(true);
          }}
        >
          <Text style={styles.infoText}>Reply</Text>
        </Pressable>
      </View>
      {c.childComments &&
        !c.parent_comment_id &&
        c.childComments.map((item) => <Comment key={item.id} c={item} />)}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userCommentContainer: {
    paddingVertical: hp("2.5%"),
  },
  userCommentContainerChild: {
    marginLeft: wp("15%"),
    marginTop: wp("1%"),
    marginBottom: 0,
  },
  userImage: {
    height: wp("8%"),
    width: wp("8%"),
    margin: wp("2%"),
    marginLeft: 0,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  commentWrapper: {
    flexDirection: "row",
  },
  commentWrapperText: {
    flexDirection: "row",
    marginTop: hp("1%"),
    flex: 1,
  },
  commentText: {
    color: "#FFF",
    fontFamily: "AvenirNextRegular",
    fontSize: wp("3.4%"),
    lineHeight: wp("4%"),
  },
  commentInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp("1%"),
  },
  infoText: {
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
});

export default connect(null, {
  setParentCommentId,
  setInputFocused,
})(Comment);
