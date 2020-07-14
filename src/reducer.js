import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
};

function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map(item => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount - 1 }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map(item => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 }
      }
      return item
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload.id)
    }
  }

  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.amount += amount;
      cartTotal.total += itemTotal;
      return cartTotal;
    }, { total: 0, amount: 0 });
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }
  // to take both increase and decrease
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state, cart: state.cart.map(item => {
        if (item.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return item = { ...item, amount: item.amount + 1 };
          } else if (action.payload.toggle === "dec") {
            return item = { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
    }
  }

  return state;
}

export default reducer