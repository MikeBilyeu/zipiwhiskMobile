import React from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../../Header";
import ZipiWhiskIcon from "../../Header/ZipiWhiskIcon";
import CreateRecipeBtn from "./CreateRecipeBtn";
import UserInfo from "./UserInfo";
import SearchBtn from "../../SearchBtn";

const ProfileHeader = ({ dropDownOpen, toggleDropDown }) => {
  const navigation = useNavigation();
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={130}
    >
      <ZipiWhiskIcon />
      <UserInfo handleImagePress={() => navigation.navigate("Settings")}>
        <CreateRecipeBtn />
      </UserInfo>
      <SearchBtn
        dropDownOpen={dropDownOpen}
        toggleDropDown={toggleDropDown}
        BtnText="Saves"
      ></SearchBtn>
    </Header>
  );
};

export default ProfileHeader;
