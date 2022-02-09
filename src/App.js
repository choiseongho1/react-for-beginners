import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Nav from "./routes/Nav.js";
import List from "./routes/List.js";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Nav />
        <Switch>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/page/:path/:num" element={<List />} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
