import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./Components";
import Homepage from "./Components/Homepage";
import Cart from "./Components/Cart";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
