import "./App.scss";
import ResultPage from "./components/pages/ResultPage";
import SearchPage from "./components/pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchPage />
          </Route>
          <Route path="/:searched">
            <ResultPage />
          </Route>
          <Route
            path="*"
            component={() => (
              <>
                <h1>error</h1>
              </>
            )}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
