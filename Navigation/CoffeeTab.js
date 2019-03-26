import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import List from "../Components/CoffeeList";
import Detail from "../Components/CoffeeDetail";

const CoffeeTab = createStackNavigator(
  {
    List: List,
    Detail: Detail
  },
  {
    initialRouteName: "List"
  }
);
export default CoffeeTab;
