import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 1
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ],
  totalQuentity: 2
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let newItem = state.items.find(
        item =>
          action.payload.drink === item.drink &&
          action.payload.option === item.option
      );
      if (newItem) {
        newItem.quantity += action.payload.quantity;
        return {
          ...state,
          items: [...state.items],
          totalQuentity: state.totalQuentity + action.payload.quantity
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload),
          totalQuentity: state.totalQuentity + action.payload.quantity
        };
      }

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
        totalQuentity: state.totalQuentity - action.payload.quantity
      };

    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: [],
        totalQuentity: 0
      };

    default:
      return state;
  }
};

export default cartReducer;
