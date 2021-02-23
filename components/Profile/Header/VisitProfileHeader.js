import React from "react";
import { View } from "react-native";

import Header from "../../Header";
import UserInfo from "./UserInfo";
import SearchBtn from "../../SearchBtn";
import FollowUser from "./FollowUser";

const VisitProfileHeader = ({ dropDownOpen, toggleDropDown }) => {
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={145}
    >
      <FollowUser />
      <UserInfo>
        <View style={{ width: 65 }} />
      </UserInfo>
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Likes"
      />
    </Header>
  );
};

export default VisitProfileHeader;
