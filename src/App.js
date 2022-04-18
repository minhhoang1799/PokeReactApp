import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./config/route";
import Footer from "./views/components/Footer/Footer";
import Header from "./views/components/Header/Header";
import { PrivateRoute } from "./views/components/PrivateRouter/index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map((route) =>
            route.private ? <PrivateRoute {...route} /> : <Route {...route} />
          )}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
