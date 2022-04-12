import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { categoryChange } from "../../../redux/actions/user";
import {
  selectUsername,
  selectFullname,
  selectImageUrl,
  selectNumFollowers,
  selectNumFollowings,
  selectCategory,
} from "../../../redux/reducers/userReducer";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import FollowContainer from "./FollowsContainer";
import CreateRecipeBtn from "./CreateRecipeBtn";
import CategorySwipe from "./CategorySwipe";
import ActivityBtn from "./ActivityBtn";

const ProfileHeader = (props) => {
  const navigation = useNavigation();
  return (
    <Header>
      <View style={{ width: "100%", height: hp("26%") }}>
        <UserInfo
          username={props.username}
          fullname={props.fullname}
          imageUrl={props.imageUrl}
          handleImagePress={() => navigation.navigate("Settings")}
        >
          <CreateRecipeBtn />
          <ActivityBtn />
        </UserInfo>
        <FollowContainer
          username={props.username}
          numFollowings={props.numFollowings}
          numFollowers={props.numFollowers}
        ></FollowContainer>
        <CategorySwipe
          category={props.category}
          categoryChange={props.categoryChange}
        />
      </View>
    </Header>
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
