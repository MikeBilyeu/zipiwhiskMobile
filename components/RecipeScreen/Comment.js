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
          <Pressable
            onPress={handleLikePress}
            style={{
              position: "absolute",
              right: 0,
              flexDirection: "row",
              width: wp("15%"),
              justifyContent: "flex-end",
            }}
            hitSlop={10}
          >
            {numLikes > 0 && (
              <Text style={styles.infoText}>
                {numLikes} Like{numLikes > 1 ? "s" : ""}
              </Text>
            )}
            <Ionicons
              name="heart"
              size={wp("3%")}
              color={liked ? "#FF2121" : "rgba(255,255,255,.2)"}
              style={{
                width: wp("3%"),
                marginLeft: wp("1%"),
              }}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.commentInfoContainer}>
        <Text style={styles.infoText}>{moment(c.created_at).fromNow()}</Text>

        {/* <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          hitSlop={10}
          onPress={() => {
            setParentCommentId(c.id);
            setInputFocused(true);
          }}
        >
          <Text style={styles.infoText}>Reply</Text>
        </Pressable> */}
      </View>
      {c.childComments &&
        !c.parent_comment_id &&
        c.childComments.map((item) => <Comment key={item.id} c={item} />)}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userCommentContainer: {},
  userCommentContainerChild: {
    marginTop: 0,
    marginLeft: wp("18%"),
    marginVertical: 0,
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
    marginTop: wp("4%"),
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
    marginTop: wp("1%"),
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
