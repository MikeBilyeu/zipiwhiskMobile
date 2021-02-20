import React from "react";

import Header from "../../Header";
import ZipiWhiskIcon from "../../Header/ZipiWhiskIcon";
import UserInfo from "./UserInfo";
import SearchBtn from "../../SearchBtn";

const ProfileHeader = ({ dropDownOpen, toggleDropDown }) => {
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={130}
    >
      <ZipiWhiskIcon />
      <UserInfo />
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Likes"
      />
    </Header>
  );
};

export default ProfileHeader;
