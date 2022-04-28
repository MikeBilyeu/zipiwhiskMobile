import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import RecipeCardSmall from "../RecipeCardSmall";

const RecipeScroll = (props) => {
  const navigation = useNavigation();

  const renderItem = ({ index, item }) => (
    <RecipeCardSmall
      index={index}
      title={item.title}
      media_url={item.media_url}
      media_type={item.media_type}
      handlePress={() =>
        navigation.push(props.navigateTo, {
          index,
          data: props.recipes,
          subTitle: props.category || null,
        })
      }
    />
  );

  const renderText = () => (
    <Text style={styles.noResultsText}>{`No ${
      props.category
        ? props.category.toLowerCase() +
          " recipes " +
          props.screenTitle.toLowerCase()
        : props.screenTitle.toLowerCase() + " recipes"
    }.`}</Text>
  );
  return (
    !props.isLoading && (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.recipes}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={renderText}
      />
    )
  );
};

const styles = StyleSheet.create({
  noResultsText: {
    color: "rgba(200,200,200,1)",
    textAlign: "center",
    fontFamily: "AvenirNextBold",
    fontSize: wp("4.5%"),
    marginTop: hp("15%"),
  },
});

export default RecipeScroll;
