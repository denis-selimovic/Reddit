import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
          <div>
              <Header/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
