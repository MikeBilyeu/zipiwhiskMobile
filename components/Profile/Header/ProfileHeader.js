import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { categoryChange } from "../../../redux/actions/userRecipes";

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
          user={props.user}
          handleImagePress={() => navigation.navigate("Settings")}
        >
          <ActivityBtn />
        </UserInfo>
        <FollowContainer user={props.user}>
          <CreateRecipeBtn />
        </FollowContainer>
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
  category: state.userRecipes.category,
});
export default connect(mapStateToProps, { categoryChange })(ProfileHeader);
