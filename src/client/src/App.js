import React from "react";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Intro from './components/Intro'
import Register from "./components/Auth/components/Register";
import UserAccount from "./components/Auth/components/Register/components/UserAccount";
import StudioAccount from "./components/Auth/components/Register/components/StudioAccount";
import Login from "./components/Auth/components/Login";
import StudioMainPage from "./components/StudioMainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/create-account" exact component={Register} />
        <Route path="/create-user-account" exact component={UserAccount} />
        <Route path="/create-studio-account" exact component={StudioAccount} />
        <Route path="/login" exact component={Login} />
        <Route path="/studio-main" exact component={StudioMainPage} />
      </Switch>
    </Router>
  )
}

export default App;
