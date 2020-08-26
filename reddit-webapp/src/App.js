import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginModal from "./components/auth/LoginModal";

function App() {
  return (
    <div>
      <BrowserRouter>
          <div>
              <Header/>
              <Route exact path="/login" component={LoginModal}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
