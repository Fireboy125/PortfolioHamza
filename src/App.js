import "./App.css";
import "./fonts/transfonter.org-20210928-143112/stylesheet.css";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route>Error</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
