import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
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

import moment from "moment";

const Comment = ({ c }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(c.liked);
  return (
    <View
      key={c.id.toString()}
      style={[
        styles.userCommentContainer,
        c.parent_comment_id && styles.userCommentContainerChild,
      ]}
    >
      <View style={styles.commentWrapper}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("VisitProfile")}
        >
          <Image style={styles.userImage} source={{ uri: c.user.image }} />
        </TouchableWithoutFeedback>

        <View style={[styles.commentWrapperText]}>
          <Text style={styles.commentText}>
            <Text
              style={[styles.commentText, { fontFamily: "AvenirNextDemiBold" }]}
              onPress={() => navigation.navigate("VisitProfile")}
            >
              {c.user.username + " "}
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
          onPress={() => setLiked(!liked)}
          style={{
            flexDirection: "row",
          }}
          hitSlop={10}
        >
          <Ionicons
            name="heart"
            size={wp("2.75%")}
            color={liked ? "#FF2121" : "#464646"}
            style={{
              width: wp("3%"),
              height: wp("3%"),
              marginHorizontal: wp("1%"),
            }}
          />
          {c.numLikes > 0 && (
            <Text style={styles.infoText}>
              {c.numLikes} Like{c.numLikes > 1 ? "s" : ""}
            </Text>
          )}
        </Pressable>

        <TouchableOpacity style={styles.replyBtn}>
          <Text style={[styles.infoText, styles.replyBtnText]}>Reply</Text>
        </TouchableOpacity>
      </View>
      {c.childComments &&
        !c.parent_comment_id &&
        c.childComments.map((item) => <Comment c={item} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  userCommentContainer: {
    marginVertical: hp("2%"),
  },
  userCommentContainerChild: {
    marginLeft: wp("5%"),
    marginVertical: wp("1%"),
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
    marginTop: hp("1%"),
  },
  infoText: {
    fontSize: wp("3%"),
    fontFamily: "AvenirNextRegular",
    color: "#fff",
  },
});

export default Comment;
