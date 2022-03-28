import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import RecipeCardSmall from "../RecipeCardSmall";
import { getUserRecipes } from "../../redux/actions/userRecipes";

const RecipeScroll = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    props.getUserRecipes(props.userId, props.category);
  }, [props.category]);

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
          subTitle: props.category || null,
        })
      }
    />
  );
  const renderText = () => (
    <Text style={styles.noResultsText}>{`No ${
      props.category ? props.category.toLowerCase() + " " : ""
    }recipes saved.`}</Text>
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
        ListEmptyComponent={renderText}
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
  noResultsText: {
    color: "rgba(200,200,200,1)",
    textAlign: "center",
    fontFamily: "AvenirNextBold",
    fontSize: wp("4.5%"),
    marginTop: hp("15%"),
  },
});
const mapStateToProps = (state) => ({
  userRecipes: state.userRecipes,
  userId: state.user.id,
  category: state.userRecipes.category,
});
export default connect(mapStateToProps, { getUserRecipes })(RecipeScroll);
