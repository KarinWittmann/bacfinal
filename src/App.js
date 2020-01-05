import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Panel from "./Panel/Panel";
import Login from "./Login/Login";
import Level1 from "./GameBoard/Level1";
import Level2 from "./GameBoard/Level2";
import Level3 from "./GameBoard/Level3";
import Level4 from "./GameBoard/Level4";
import CreateDog from "./pages/CreateDog/CreateDog";
import SelectDog from "./pages/SelectDog/SelectDog";
import Scores from "./Scores/Scores";
import { UserProvider } from "./context/user";
import "./App.css";

export default function App() {
  const [user, setUser] = useState();

  return user ? (
    <div className="App">
      <UserProvider value={user}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Panel} />
            <Route path="/level1" component={Level1} />
            <Route path="/level2" component={Level2} />
            <Route path="/level3" component={Level3} />
            <Route path="/level4" component={Level4} />
            <Route path="/selectdog" component={SelectDog} />
            <Route path="/createdog" component={CreateDog} />
            <Route path="/scores" component={Scores} />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  ) : (
    <Login onLogin={user => setUser(user)} />
  );
}
