import React from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

import Header from "../../Header";
import ZipiWhiskIcon from "../../Header/ZipiWhiskIcon";
import CreateRecipeBtn from "./CreateRecipeBtn";
import UserInfo from "./UserInfo";
import SearchBtn from "../../SearchBtn";

const ProfileHeader = ({ dropDownOpen, toggleDropDown, user }) => {
  const navigation = useNavigation();
  return (
    <Header
      dropDownOpen={dropDownOpen}
      toggleDropDown={toggleDropDown}
      height={130}
    >
      <ZipiWhiskIcon />
      <UserInfo
        user={user}
        handleImagePress={() => navigation.navigate("Settings")}
      >
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(ProfileHeader);
