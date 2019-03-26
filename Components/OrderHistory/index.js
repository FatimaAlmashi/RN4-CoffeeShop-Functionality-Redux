import React, { Component } from "react";
import { Content, Text, Body } from "native-base";

class Profile extends Component {
  state = {
    orders: ["order1", "order2", "order3"]
  };
  render() {
    return (
      <Content>
        <Body>
          <Text>Orders History</Text>
          <Text>{this.state.orders}</Text>
        </Body>
      </Content>
    );
  }
}

export default Profile;
