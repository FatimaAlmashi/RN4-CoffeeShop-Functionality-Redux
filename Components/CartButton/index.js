import React, { Component } from "react";
import { Icon, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class CartButton extends Component {
  render() {
    return (
      <>
        <Icon
          onPress={() => this.props.navigation.navigate("Cart")}
          name="shoppingcart"
          type="AntDesign"
        />
        <Text>{this.props.totalQuentity}</Text>
      </>
    );
  }
}

const mapStateToProps = state => ({
  totalQuentity: state.cartReducer.totalQuentity
});

export default withNavigation(connect(mapStateToProps)(CartButton));
// export default withNavigation(CartButton);
