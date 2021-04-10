import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider as Provider } from "./utils/context/GlobalState";
import Digest from "./components/member/Digest";
import Ingredient from "./components/member/Ingredient";
import Recipe from "./components/member/Recipe";
import Navbar from "./components/navbar/Navbar";
import Item from "./components/member/Item";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FoodDatabase from "./components/member/FoodDatabase"

import "./App.css";

function App() {
  return (
    <Provider>
      <>
        <Navbar />
        {/* <DivHero /> */}
        <Router>
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
            <Route exact path="/item">
              < Item/>
            </Route>
            <Route exact path="/ingredient">
              <Ingredient />
            </Route>
            <Route exact path="/digest">
              <Digest />
            </Route>
            <Route exact path="/foodDatabase">
              <FoodDatabase />
            </Route>
          </Switch>
        </Router>
      </>
     </Provider>
  );
}

export default App
