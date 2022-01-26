import React from "react";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Intro from './components/Intro'
import Register from "./components/Auth/components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  )
}

export default App;
