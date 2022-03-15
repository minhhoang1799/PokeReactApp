
import './App.css';
import routes from "./config/route"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PrivateRoute} from "./views/components/PrivateRouter/index"

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => route.private ? <PrivateRoute {...route}/> : <Route {...route}/>)}
      </Switch>
    </Router>
  );
}

export default App;
