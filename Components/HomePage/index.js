import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

// Navigations
import AppContainer from "../../Navigation/index";

class HomePage extends Component {
  static navigationOptions = {
    title: "Home",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    headerTextStyle: {
      fontWeight: "bold"
    }
  };

  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
