import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import SearchBtn from "../../SearchBtn";
import UserFollows from "./UserFollows";

const VisitProfileHeader = ({ dropDownOpen, toggleDropDown, userProfile }) => {
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={wp("55%")}
    >
      <FollowUser username={userProfile.username} />
      <UserInfo user={userProfile}>
        <View style={{ width: wp("20%") }} />
      </UserInfo>

      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Saves"
      />
    </Header>
  );
};

const mapStateToProps = (state) => ({ userProfile: state.userProfile });
export default connect(mapStateToProps)(VisitProfileHeader);
