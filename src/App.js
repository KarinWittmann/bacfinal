import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login/Login";
import Level1 from "./GameBoard/Level1";
import Level2 from "./GameBoard/Level2";
import Level3 from "./GameBoard/Level3";
import Level4 from "./GameBoard/Level4";
import Panel from "./pages/Panel/Panel";
import CreateDog from "./pages/CreateDog/CreateDog";
import SelectDog from "./pages/SelectDog/SelectDog";
import Scores from "./pages/Scores/Scores";
import { UserProvider } from "./context/user";
import axios from './services/axios';
import "./App.css";

export default function App() {
  const [user, setUser] = useState();
  const [dog, setDog] = useState();

  const saveScore = ({level, points}) => {
    axios.post("/scores", {
        dog,
        level,
        points,
        date: Date.now()
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return user ? (
    <div className="App">
      <UserProvider value={user}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Panel} />
              <Route path="/level1" render={props => dog ? <Level1 {...props} onSave={points => saveScore({level:1, points})} /> : <Redirect to="/selectdog" />} />
              <Route path="/level2" render={props => dog ? <Level2 {...props} onSave={points => saveScore({level:2, points})} /> : <Redirect to="/selectdog" />} />
              <Route path="/level3" render={props => dog ? <Level3 {...props} onSave={points => saveScore({level:3, points})} /> : <Redirect to="/selectdog" />} />
              <Route path="/level4" render={props => dog ? <Level4 {...props} onSave={points => saveScore({level:4, points})} /> : <Redirect to="/selectdog" />} />
              <Route path="/selectdog" render={props => <SelectDog {...props} selectedDog={dog} setSelectedDog={setDog} />} />
              <Route path="/createdog" component={CreateDog} />
              <Route path="/scores" render={props => dog ? <Scores {...props} dog={dog} /> : <Redirect to="/selectdog" />} />
            </Switch>
          </BrowserRouter>
      </UserProvider>
    </div>
  ) : (
    <Login onLogin={user => setUser(user)} />
  );
}
