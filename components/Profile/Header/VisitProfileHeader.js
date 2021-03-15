import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import SearchBtn from "../../SearchBtn";
import FollowUser from "./FollowUser";
import UserFollows from "./UserFollows";

const VisitProfileHeader = ({ dropDownOpen, toggleDropDown }) => {
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={210}
    >
      <FollowUser />
      <UserInfo>
        <View style={{ width: 65 }} />
      </UserInfo>
      <UserFollows />
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Likes"
      />
    </Header>
  );
};

export default VisitProfileHeader;
