import React from 'react';
import { Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginModal from "./components/auth/LoginModal";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
          <div>
              <Header/>
              <Route exact path="/login" component={LoginModal}/>
          </div>
      </Router>
    </div>
  );
}

export default App;
