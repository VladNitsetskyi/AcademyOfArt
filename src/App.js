import React, { Component } from "react";
import "./App.scss";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Navigation from "./components/Navigation/Navigation";
import Index from "./containers/Index/Index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation
          textLeft="about"
          leftPath="/"
          textRight="index"
          rightPath="/"
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Navigation
          textLeft="project"
          leftPath="/"
          textRight="interviews"
          rightPath="/"
          style={{ position: "absolute", bottom: "0" }}
        />
      </BrowserRouter>
    );
  }
}

export default App;
