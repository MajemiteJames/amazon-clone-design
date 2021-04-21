import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react'
import { auth } from "../src/firebase";
import './App.css';
import Home from "../src/components/Home"
import Header from "../src/components/Header"
import Login from "../src/components/Login"
import Checkout from "../src/components/Checkout"
import { useStateValue } from "../src/StateProvider"

function App() {
  const [ dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/checkout">
             <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  
}

export default App;
