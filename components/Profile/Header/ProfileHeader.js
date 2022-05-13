import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { categoryChange } from "../../../redux/actions/user";
import {
  selectUsername,
  selectFullname,
  selectImageUrl,
  selectCategory,
} from "../../../redux/reducers/userReducer";
import {
  selectNumFollowers,
  selectNumFollowings,
} from "../../../redux/reducers/followsReducer";

import UserInfo from "./UserInfo";
import CreateRecipeBtn from "./CreateRecipeBtn";
import CategorySwipe from "./CategorySwipe";
import ActivityBtn from "./ActivityBtn";

const ProfileHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <UserInfo
        username={props.username}
        fullname={props.fullname}
        imageUrl={props.imageUrl}
        handleImagePress={() => navigation.navigate("Settings")}
      >
        <CreateRecipeBtn />
        <ActivityBtn />
      </UserInfo>
      <CategorySwipe
        category={props.category}
        categoryChange={props.categoryChange}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  username: selectUsername(state),
  fullname: selectFullname(state),
  imageUrl: selectImageUrl(state),
  numFollowers: selectNumFollowers(state),
  numFollowings: selectNumFollowings(state),
  category: selectCategory(state),
});
export default connect(mapStateToProps, { categoryChange })(ProfileHeader);
