import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import moment from "moment";

const Comment = ({ c }) => {
  const navigation = useNavigation();
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
        <Text style={[styles.infoText, { color: "#B7B7B7" }]}>
          {moment(c.created_at).fromNow()}
        </Text>
        {c.numLikes > 0 && (
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Image
              source={
                c.liked
                  ? require("../../assets/redLike.png")
                  : require("../../assets/greyLike.png")
              }
              style={{ width: 10, height: 10, marginHorizontal: 5 }}
            />
            <Text style={styles.infoText}>
              {c.numLikes} Like{c.numLikes > 1 ? "s" : ""}
            </Text>
          </TouchableOpacity>
        )}
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
    marginVertical: 10,
  },
  userCommentContainerChild: {
    marginLeft: 20,
    marginVertical: 5,
  },
  userImage: {
    height: 30,
    width: 30,
    margin: 5,
    marginLeft: 0,
    resizeMode: "stretch",
    borderRadius: 100,
  },
  commentWrapper: {
    flexDirection: "row",
  },
  commentWrapperText: {
    flexDirection: "row",
    marginTop: 10,
    flex: 1,
  },
  commentText: {
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    fontSize: 15,
    lineHeight: 18,
  },
  commentInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  infoText: {
    fontSize: 13,
    fontFamily: "AvenirNextRegular",
    color: "#707070",
  },
});

export default Comment;
