import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

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
      height={210}
    >
      <FollowUser username={user.username} />
      <UserInfo user={user}>
        <View style={{ width: 65 }} />
      </UserInfo>
      <UserFollows user={user} />
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Likes"
      />
    </Header>
  );
};

const mapStateToProps = (state) => ({ user: state.auth.user });
export default connect(mapStateToProps)(VisitProfileHeader);
