import React from 'react';
import { Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginModal from "./components/auth/LoginModal";
import history from "./history";
import Body from "./components/body/Body";

function App() {
  return (
    <div>
      <Router history={history}>
          <div>
              <Header/>
              <Body/>
              <Route exact path="/login" component={() => <LoginModal onBackgroundClicked={() => history.push("/")} />}/>
          </div>
      </Router>
    </div>
  );
}

export default App;
