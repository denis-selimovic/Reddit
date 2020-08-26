import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/forms/Login"
import Register from "./components/forms/Register"

function App() {
  return (
    <div>
      <BrowserRouter>
          <div>
              <Header/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Register}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
