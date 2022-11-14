import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import VideogameDetail from "./Components/VideogameDetail";
import VideogameCreate from "./Components/Form";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
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
