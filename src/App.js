import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Nav from "./components/Nav.js";
import List from "./components/List.js";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Nav />
        <Switch>
          <Route path="/page/:path/:num">
            <List />
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path={"/"}>
            <Home />
          </Route>

          {/* 
          Route 위치에 따라서 Home으로 가는게 되고 안되고 하는 경우가 존재함 해당 이유 찾기
          
          */}
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
