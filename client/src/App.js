import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import VideogameDetail from "./Components/VideogameDetail";
import VideogameCreate from "./Components/Form";
import Landing from "./Components/Landing";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavBar/>
        </Route>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/detail/:id" component={VideogameDetail}/>
      <Route exact path="/create">
        <VideogameCreate />
      </Route>
    </div>
  );
}

export default App;
