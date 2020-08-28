import React from 'react';
import { Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LoginModal from "./components/wrappers/LoginModal";
import history from "./history";
import Body from "./components/body/Body";
import CreatePostWrapper from "./components/wrappers/CreatePostWrapper";
import DeleteModal from "./components/wrappers/DeleteModal";

function App(props) {
  return (
    <div>
      <Router history={history}>
          <div>
              <Header/>
              <Route exact path="/" component={Body}/>
              <Route exact path="/login" component={() => <LoginModal onBackgroundClicked={() => history.push("/")} />}/>
              <Route exact path="/submit" component={CreatePostWrapper}/>
              <Route exact path="/delete/:topic/:id" component={DeleteModal}/>
          </div>
      </Router>
    </div>
  );
}

export default App;
