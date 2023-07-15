import Home from "../pages/Home";
import Index from "../pages/Index";

import { AppStyled } from "./styles";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <AppStyled>
      <Router>
        <Switch>
          <Route exact path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
        </Switch>
      </Router>
    </AppStyled>
  );
};

export default App;
