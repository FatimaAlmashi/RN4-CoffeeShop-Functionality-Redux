import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";
import Profile from "../Components/Profile";
import List from "../Components/CoffeeList";

const AuthTab = createStackNavigator(
  {
    Login: Login,
    Profile: Profile,
    List: List
  },
  {
    initialRouteName: "Login"
  }
);
export default AuthTab;
