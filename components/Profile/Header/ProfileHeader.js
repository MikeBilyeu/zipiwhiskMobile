import React from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import FollowContainer from "./FollowsContainer";
import CreateRecipeBtn from "./CreateRecipeBtn";
import CategorySwipe from "./CategorySwipe";

const ProfileHeader = ({ user }) => {
  const navigation = useNavigation();
  return (
    <Header>
      <UserInfo
        user={user}
        handleImagePress={() => navigation.navigate("Settings")}
      />
      <FollowContainer user={user}>
        <CreateRecipeBtn />
      </FollowContainer>
      <CategorySwipe />
    </Header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(ProfileHeader);
