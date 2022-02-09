import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Header from "./routes/Header.js";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/:path">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
