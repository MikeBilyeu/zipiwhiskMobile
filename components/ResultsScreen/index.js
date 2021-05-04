import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ScreenHeader from "../ScreenHeader";
import RecipeCard from "../RecipeCard";
import RecipeSmallView from "../RecipeSmallView";
import data from "../../data";

const ResultsScreen = (props) => {
  const { renderItemType } = props.route.params;
  const smallViewStyles = { paddingTop: 10, paddingHorizontal: 10 };

  const renderCard = ({ item }) => <RecipeCard data={item} />;
  const renderSmallView = ({ item }) => <RecipeSmallView item={item} />;

  return (
    <View style={styles.container}>
      <ScreenHeader title={props.route.params.search} subTitle={"Search"} />
      <FlatList
        style={[
          styles.listContainer,
          renderItemType == "small" && smallViewStyles,
        ]}
        contentContainerStyle={{ paddingTop: 0 }}
        data={data}
        numColumns={1}
        renderItem={renderItemType == "small" ? renderSmallView : renderCard}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});

export default ResultsScreen;
