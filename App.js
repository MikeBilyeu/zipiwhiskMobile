import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import { useFonts } from "expo-font";
import { checkAuthToken } from "./utils/checkAuthToken";
import axios from "axios";

import Auth from "./components/AuthScreen/Auth";
import HomeStack from "./components/HomeStack";

axios.defaults.baseURL = "http://192.168.1.9:3000/";

checkAuthToken();

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
        {props.auth.isAuth ? <HomeStack /> : <Auth />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <Provider store={store}>
    <AppConatiner />
  </Provider>
);

export default App;
