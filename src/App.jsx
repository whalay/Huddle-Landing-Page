import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";

import Section from "./components/Section";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Redirect to="/home"/>
        
        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/notfound">
          <NotFound />
        </Route>
      </Router>
    </div>
  );
}

export default App;
