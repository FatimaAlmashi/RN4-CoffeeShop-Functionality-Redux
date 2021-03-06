import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/cartActions";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems.length ? (
          <>
            {cartItems}
            <Button full danger onPress={this.props.checkoutCart}>
              <Text>Checkout</Text>
            </Button>
          </>
        ) : (
          <Text>Thanks for shopping in our coffee shop!</Text>
        )}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});
const mapDispatchToProps = dispatch => ({
  checkoutCart: () => dispatch(actionCreators.checkoutCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
