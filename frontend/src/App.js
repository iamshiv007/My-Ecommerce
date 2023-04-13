import React from "react"
import { LogInSignUp } from "./components/User/LogInSignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <LogInSignUp/>
      </Switch>
    </Router>
  );
}

export default App;
