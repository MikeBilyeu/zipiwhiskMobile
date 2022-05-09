import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  selectId,
  selectUsername,
  selectFullname,
  selectImageUrl,
  selectNumFollowers,
  selectNumFollowings,
  selectIsFollowing,
} from "../../../redux/reducers/visitProfileReducer";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import FollowContainer from "./FollowsContainer";
import ToggleFollowBtn from "../../ToggleFollowBtn";

const VisitProfileHeader = (props) => {
  return (
    <Header>
      <View style={{ height: hp("17%"), width: "100%" }}>
        <UserInfo
          username={props.username}
          fullname={props.fullname}
          imageUrl={props.imageUrl}
        />

        <FollowContainer
          username={props.username}
          numFollowers={props.numFollowers}
          numFollowings={props.numFollowings}
        >
          <ToggleFollowBtn
            BtnStyles={{ alignSelf: "center" }}
            id={props.id}
            isFollowing={props.isFollowing}
          />
        </FollowContainer>
      </View>
    </Header>
  );
};

const mapStateToProps = (state) => ({
  id: selectId(state),
  username: selectUsername(state),
  fullname: selectFullname(state),
  imageUrl: selectImageUrl(state),
  numFollowers: selectNumFollowers(state),
  numFollowings: selectNumFollowings(state),
  isFollowing: selectIsFollowing(state),
});
export default connect(mapStateToProps)(VisitProfileHeader);
