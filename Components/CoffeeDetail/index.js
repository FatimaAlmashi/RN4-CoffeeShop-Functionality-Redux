import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "native-base";
import CartButton from "../CartButton";
import * as actionCreators from "../../store/actions/cartActions";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//List
import coffeeshops from "../CoffeeList/list";

class CoffeeDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("coffeeShop").name,
      headerLeft: null,
      headerRight: <CartButton />
    };
  };

  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };
  handleAddButton = () => {
    let item = {
      drink: this.state.drink,
      option: this.state.option,
      quantity: 1
    };
    this.props.addItemToCart(item);
  };

  render() {
    let coffeeshop = this.props.navigation.getParam("coffeeShop");
    const { loading } = this.props.coffeeReducer;
    // const { coffeeShops, loading } = this.props.coffeeReducer;

    if (loading) return <Content />;
    // const coffeeshop = coffeeShops[0];
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger onPress={this.handleAddButton}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: newItem => dispatch(actionCreators.addItemToCart(newItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeDetail);
