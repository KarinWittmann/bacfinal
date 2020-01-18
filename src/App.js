import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import Level1 from "./GameBoard/Level1";
import Level2 from "./GameBoard/Level2";
import Level3 from "./GameBoard/Level3";
import Level4 from "./GameBoard/Level4";
import Games from "./pages/Panel/Panel";
import CreateDog from "./pages/CreateDog/CreateDog";
import SelectDog from "./pages/SelectDog/SelectDog";
import Scores from "./pages/Scores/Scores";
import { ContextProvider } from "./context";
import { HOME, GAMES, LEVEL1, LEVEL2, LEVEL3, LEVEL4, CREATE_DOG, SELECT_DOG, SCORES, LOGIN, REGISTER} from './config/routes';
import Header from './components/header/header';

export default function App() {
  const [user, setUser] = useState();
  const [dog, setDog] = useState();

  const withHeader = page => <Header onLogout={() => setUser()}>{page}</Header>;
  const whenDogIsSelected = page => dog ? page : <Redirect to="/selectdog" />
  const renderAuth = () => (
    <div>
      <Switch>
        <Route path={[HOME, LOGIN]} exact render={props => withHeader(<Login {...props} onLogin={setUser} />)} />
        <Route path={REGISTER} exact render={props => withHeader(<Register {...props} onRegister={setUser} />)} />
      </Switch>
    </div>
  );
  const renderApp = () => (
    <div>
      <ContextProvider value={{user, dog}}>
        <Switch>
          <Route path={[HOME, GAMES]} exact render={props => whenDogIsSelected(withHeader(<Games {...props} />))} />
          <Route path={SCORES} exact render={props => whenDogIsSelected(withHeader(<Scores {...props} />))} />
          <Route path={LEVEL1} exact render={props => whenDogIsSelected(<Level1 {...props} />)} />
          <Route path={LEVEL2} exact render={props => whenDogIsSelected(<Level2 {...props} />)} />
          <Route path={LEVEL3} exact render={props => whenDogIsSelected(<Level3 {...props} />)} />
          <Route path={LEVEL4} exact render={props => whenDogIsSelected(<Level4 {...props} />)} />
          <Route path={SELECT_DOG} exact render={props => withHeader(<SelectDog {...props} setSelectedDog={setDog} />)} />
          <Route path={CREATE_DOG} exact render={props => withHeader(<CreateDog {...props} />)} />
        </Switch>
      </ContextProvider>
    </div>
  );
  return user ? renderApp() : renderAuth();
}
