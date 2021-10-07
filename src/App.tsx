import React, { Component } from "react";
import "./App.css";
import Home from './components/Home';
import PcHome from './components/pc/Home';
import SpHome from './components/sp/Home';
import SpRecipesInfo from './components/sp/SpRecipesInfo';
import PcMakeRecipes from './components/pc/PcMakeRecipes';
import SpMakeRecipes from './components/sp/SpMakeRecipes';
import PcRecipesInfo from './components/pc/PcRecipesInfo';
import test from './components/pc/test';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

interface Props {}

interface State {
  message: string;
}

class App extends Component<Props, State> {
  Mounting(){

  }

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={this.getHome()} />
        <Route path="/MakeRecipes" exact component={this.getMakeRecipes()} />
        <Route path="/RecipesInfo" exact component={this.getHowToMake()} />
        <Route path="/test" exact component={test} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    );
  }

  getHome() {
    if(window.innerWidth > 767) {
      return PcHome
    }
    return SpHome
  }
  getHowToMake() {
    if(window.innerWidth > 767) {
      return PcRecipesInfo
    }
    return SpRecipesInfo
  }
  getMakeRecipes() {
    if(window.innerWidth > 767) {
      return PcMakeRecipes
    }
    return SpMakeRecipes
  }
}

export default App;