import React, { Component } from "react";
import * as actionCreators from "../../store/actions/cartActions";
import { connect } from "react-redux";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.removeItemFromCart(item)}
          >
            <Icon name="trash" style={{ color: "black", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: newItem =>
    dispatch(actionCreators.removeItemFromCart(newItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
