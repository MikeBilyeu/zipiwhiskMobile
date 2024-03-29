import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ActivityScroll from "./ActivityScroll";
import FollowScroll from "./FollowScroll";
import { getFollowers, getFollowings } from "../../redux/actions/follows";
import { getActivity } from "../../redux/actions/user";
import {
  selectFollowers,
  selectIsLoadingFollowers,
  selectFollowings,
  selectIsLoadingFollowings,
  selectNumFollowers,
  selectNumFollowings,
} from "../../redux/reducers/followsReducer";
import {
  selectActivity,
  selectIsLoadingActivity,
} from "../../redux/reducers/activityReducer";

const Tab = createMaterialTopTabNavigator();

const ActivityTab = (props) => {
  useEffect(() => {
    props.getFollowers();
    props.getFollowings();
    props.getActivity();
  }, []);
  return (
    <Tab.Navigator
      style={styles.wrapper}
      backBehavior="initialRoute"
      initialLayout={{ width: Dimensions.get("window").width }}
      initialRouteName="Activity"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: wp("2.3%"),
          fontFamily: "AvenirNextRegular",
          textTransform: "capitalize",
        },
        tabBarItemStyle: { width: wp("33.33%") },
        tabBarActiveTintColor: "#464646",
        tabBarIndicatorStyle: {
          backgroundColor: "#00D088",
          marginBottom: 1,
          borderRadius: "100%",
          width: "30%",
          left: wp("1.665%"),
        },
      }}
    >
      <Tab.Screen
        name="Activity"
        options={{
          tabBarLabel: `Activity`,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? "notifications-circle"
                  : "notifications-circle-outline"
              }
              size={wp("6%")}
              color={focused ? "#000" : color}
            />
          ),
        }}
        children={() => (
          <ActivityScroll
            isLoading={props.isLoadingActivity}
            data={props.activity}
            onRefresh={props.getActivity}
          />
        )}
      />
      <Tab.Screen
        name="Followers"
        options={{
          tabBarLabel: `Followers (${props.numFollowers})`,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people-circle" : "people-circle-outline"}
              size={wp("6%")}
              color={focused ? "#000" : color}
            />
          ),
        }}
        children={() => (
          <FollowScroll
            isLoading={props.isLoadingFollowers}
            users={props.followers}
            onRefresh={props.getFollowers}
          />
        )}
      />
      <Tab.Screen
        name="Following"
        options={{
          tabBarLabel: `Following (${props.numFollowings})`,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={wp("6%")}
              color={focused ? "#000" : color}
            />
          ),
        }}
        children={() => (
          <FollowScroll
            isLoading={props.isLoadingFollowings}
            users={props.followings}
            onRefresh={props.getFollowings}
          />
        )}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1,
    flex: 1,
    position: "absolute",
    top: hp("11%"),
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = (state) => ({
  isLoadingFollowers: selectIsLoadingFollowers(state),
  followers: selectFollowers(state),
  isLoadingFollowings: selectIsLoadingFollowings(state),
  followings: selectFollowings(state),
  numFollowers: selectNumFollowers(state),
  numFollowings: selectNumFollowings(state),
  activity: selectActivity(state),
  isLoadingActivity: selectIsLoadingActivity(state),
});
export default connect(mapStateToProps, {
  getFollowers,
  getFollowings,
  getActivity,
})(ActivityTab);
