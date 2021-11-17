import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import FollowContainer from "./FollowsContainer";
import ToggleFollowBtn from "../../ToggleFollowBtn";

const VisitProfileHeader = ({ userProfile }) => {
  return (
    <Header>
      <View style={{ height: hp("15%"), width: "100%" }}>
        <UserInfo user={userProfile}>
          <View style={{ width: wp("20%") }} />
        </UserInfo>
        <FollowContainer user={userProfile}>
          <ToggleFollowBtn
            BtnStyles={{ alignSelf: "center" }}
            id={userProfile.id}
            following={userProfile.isFollowing}
          />
        </FollowContainer>
      </View>
    </Header>
  );
};

const mapStateToProps = (state) => ({ userProfile: state.userProfile });
export default connect(mapStateToProps)(VisitProfileHeader);
