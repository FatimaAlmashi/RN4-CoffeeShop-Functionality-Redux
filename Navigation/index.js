import { createStackNavigator, createAppContainer } from "react-navigation";

import CoffeeList from "../Components/CoffeeList/index";
import CoffeeDetail from "../Components/CoffeeDetail/index";
import CoffeeCart from "../Components/CoffeeCart/index";
import Login from "../Components/Login/index";

const ourStack = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

const AppContainer = createAppContainer(ourStack);

export default AppContainer;
