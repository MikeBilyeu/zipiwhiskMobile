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
import FollowUser from "./FollowUser";
import UserFollows from "./UserFollows";

const VisitProfileHeader = ({ dropDownOpen, toggleDropDown, user }) => {
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={wp("55%")}
    >
      <FollowUser username={user.username} />
      <UserInfo user={user}>
        <View style={{ width: wp("20%") }} />
      </UserInfo>
      <UserFollows user={user} />
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Saves"
      />
    </Header>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.user });
export default connect(mapStateToProps)(VisitProfileHeader);
