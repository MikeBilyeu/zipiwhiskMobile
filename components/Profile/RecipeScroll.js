import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import RecipeCardSmall from "../RecipeCardSmall";
import data from "../../data";
import { getUserRecipes } from "../../redux/actions/userRecipes";

const RecipeScroll = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    props.getUserRecipes(2);
  }, []);

  const renderItem = ({ index, item }) => (
    <RecipeCardSmall
      title={item.title}
      media_url={item.media_url}
      media_type={item.media_type}
      handlePress={() =>
        navigation.push("Recipe", {
          index,
          data: props.userRecipes.recipes,
          title: "Saved Recipes",
          subTitle: null,
        })
      }
    />
  );
  return (
    !props.userRecipes.isLoading && (
      <FlatList
        style={styles.listContainer}
        contentContainerStyle={{ paddingTop: props.paddingTop }}
        showsVerticalScrollIndicator={false}
        data={props.userRecipes.recipes}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    )
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    position: "absolute",
    top: hp("5%"),
    bottom: 0,
    left: 0,
    right: 0,
  },
});
const mapStateToProps = (state) => ({
  userRecipes: state.userRecipes,
});
export default connect(mapStateToProps, { getUserRecipes })(RecipeScroll);
