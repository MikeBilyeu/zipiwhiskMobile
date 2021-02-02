import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";

import ScreenHeader from "./ScreenHeader";
import moment from "moment";
import data from "../data.js";

const screenWidth = Dimensions.get("screen").width;

const Item = ({ c }) => {
  return (
    <View
      key={c.id.toString()}
      style={[
        styles.userCommentContainer,
        c.parent_comment_id && styles.userCommentContainerChild,
      ]}
    >
      <View style={styles.commentWrapper}>
        <TouchableOpacity>
          <Image
            style={{
              height: 30,
              width: 30,
              margin: 5,
              marginLeft: 0,
              resizeMode: "stretch",
              borderRadius: 100,
            }}
            source={{ uri: c.user.image }}
          />
        </TouchableOpacity>

        <View style={[styles.commentWrapperText]}>
          <Text style={styles.commentText}>
            <Text
              style={[styles.commentText, { fontFamily: "AvenirNextDemiBold" }]}
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
                  ? require("../assets/redLike.png")
                  : require("../assets/greyLike.png")
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
        c.childComments.map((item) => <Item c={item} />)}
    </View>
  );
};

const renderItem = ({ item }) => {
  return <Item c={item} />;
};

const Comments = (props) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Comments" subTitle={props.route.params.title} />
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/15.jpg" }}
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setText(text)}
            value={text}
            clearButtonMode="never"
            selectionColor="#464646"
            placeholder="Add a Comment..."
          />
          {/* <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.postBtnText}>Post</Text>
          </TouchableOpacity> */}
        </View>
        <FlatList
          data={data[0].comments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
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
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: 25,
    width: "100%",
    flex: 1,
  },
  title: {
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
    color: "#464646",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderColor: "#B7B7B7",
    borderWidth: 1,
    height: 50,
    width: "100%",
    borderRadius: 5,
    marginVertical: 5,
  },
  icon: {
    height: 30,
    width: 30,
    margin: 5,
    resizeMode: "stretch",
    borderRadius: 100,
    position: "absolute",
  },
  textInput: {
    flex: 4,
    fontSize: 18,
    color: "#313131",
    fontFamily: "AvenirNextRegular",
    height: 50,
    paddingLeft: 50,
    paddingRight: 10,
    textAlign: "left",
  },

  postBtn: {
    height: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtnText: {
    color: "#0172C4",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 15,
  },

  commentsContainer: {
    width: "100%",
  },

  userCommentContainer: {
    marginVertical: 10,
  },
  userCommentContainerChild: {
    marginLeft: 20,
    marginVertical: 5,
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

export default Comments;
