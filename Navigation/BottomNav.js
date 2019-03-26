import React from "react";
import { createBottomTabNavigator } from "react-navigation";
// import { Icon } from "native-base";
import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";
import Home from "../Components/HomePage";
import { Icon } from "native-base";
const BottomTab = createBottomTabNavigator(
  {
    Auth: AuthTab,
    Coffee: CoffeeTab,
    Orders: OrdersTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        if (routeName === "Auth") {
          iconName = "user";
          iconType = "AntDesign";
        } else if (routeName === "Coffee") {
          iconName = "coffee";
          iconType = "FontAwesome";
        } else if (routeName === "Orders") {
          iconName = "shoppingcart";
          iconType = "AntDesign";
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: tintColor, fontSize: 25 }}
          />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white",
      //   activeBackgroundColor: "white",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomTab;
