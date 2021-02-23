import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider, connect } from "react-redux";

import configureStore from "./redux/store";

import { useFonts } from "expo-font";

import Auth from "./components/Auth";
import Nav from "./components/Nav";
import RecipeScreen from "./components/RecipeScreen/RecipeScreen";
import Comments from "./components/Comments";
import CreateRecipeScreen from "./components/CreateRecipeScreen/CreateRecipeScreen";
import CameraScreen from "./components/CreateRecipeScreen/CameraScreen";
import VisitProfileScreen from "./components/Profile/VisitProfileScreen";

const store = configureStore();
const Stack = createStackNavigator();
const screenWidth = Dimensions.get("screen").width;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const AppConatiner = connect(mapStateToProps)((props) => {
  const [loaded] = useFonts({
    AvenirNextRegular: require("./assets/fonts/AvenirNext-Regular.otf"),
    AvenirNextItalic: require("./assets/fonts/AvenirNext-Italic.otf"),
    AvenirNextDemiBold: require("./assets/fonts/AvenirNext-DemiBold.otf"),
    AvenirNextBold: require("./assets/fonts/AvenirNext-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle="auto" />
      <NavigationContainer>
        {!props.auth.isAuth ? (
          <Auth />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureResponseDistance: {
                horizontal: screenWidth,
              },
            }}
          >
            <Stack.Screen name="Home" component={Nav} />
            <Stack.Screen name="VisitProfile" component={VisitProfileScreen} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App() {
  return (
    <Provider store={store}>
      <AppConatiner />
    </Provider>
  );
}

export default App;
