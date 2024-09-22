import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Switch>
          <Route  />
          {/* <Route path="/user/:username" component={UserProfile} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
