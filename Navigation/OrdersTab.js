import { Icon } from "native-base";
import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import Cart from "../Components/CoffeeCart";
import History from "../Components/OrderHistory";

const OrderTab = createStackNavigator(
  {
    Cart: Cart,
    History: History
  },
  {
    initialRouteName: "Cart"
  }
);
export default OrderTab;
