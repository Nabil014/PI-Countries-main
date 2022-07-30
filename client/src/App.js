import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from './Components/Home';
import ActivityCreate from './Components/ActivityCreate'
import Details from './Components/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={Landing}></Route>
          <Route exact path={"/home"} component={Home}></Route>
          <Route exact path={"/activities"} component={ActivityCreate}></Route>
          <Route exact path={"/home/:id"} component={Details}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
