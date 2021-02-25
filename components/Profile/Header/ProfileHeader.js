import React from "react";

import Header from "../../Header";
import ZipiWhiskIcon from "../../Header/ZipiWhiskIcon";
import CreateRecipeBtn from "./CreateRecipeBtn";
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
      <UserInfo>
        <CreateRecipeBtn />
      </UserInfo>
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Likes"
      ></SearchBtn>
    </Header>
  );
};

export default ProfileHeader;
