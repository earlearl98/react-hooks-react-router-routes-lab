import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
     <NavBar />

     <BrowserRouter>

      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Actors">
          <Actors />
        </Route>
        
        <Route  path="/Directors">
          <Directors />
        </Route>

        <Route  path="/Movies">
          <Movies />
        </Route>

        
        
      </Switch>

      </BrowserRouter>

  </div>;
}

export default App;
