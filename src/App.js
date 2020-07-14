import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
// store - stores data, think of as a state
// reducer - function that used to update store;
// reducer has 
// two arguments - state action
// state - old state/state before update
// action - what happened what update

import reducer from "./reducer"
import { createStore } from "redux";

// dispatch method - send actions to the store
// actions objects - must have type property - what kind of action
// dont mutate the state - redux built on immutability (copy)

// react-redux - PROVIDER -> wraps the app, connect -> used in components
import {Provider} from "react-redux";


//initial store


const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
