import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider as Provider } from "./utils/context/GlobalState";
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Digest from "./components/member/Digest";
import Ingredient from "./components/member/ingredient/Ingredient";
import Recipe from "./components/member/Recipe";
import Order from "./components/member/order/Order";
import Item from "./components/member/item/Item";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import './App.css';

function App() {

  return (
    <Provider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/recipe">
              <Recipe />
            </Route>
            <Route exact path="/order">
              <Order />
            </Route>
            <Route exact path="/item">
              < Item />
            </Route>
            <Route exact path="/ingredient">
              <Ingredient />
            </Route>
            <Route exact path="/digest">
              <Digest />
            </Route>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;

