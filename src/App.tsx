/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-05-15 20:26:57
 * @modify date 2021-05-15 20:26:57
 */

import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";

export interface IProps {}

const App: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="App">
      <Router>
          <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;