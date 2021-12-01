import React, { Component } from "react";
import PcHome from './components/page/pc/Home';
import SpHome from './components/page/sp/Home';
import SpRecipesInfo from './components/page/sp/SpRecipesInfo';
import PcMakeRecipes from './components/page/pc/PcMakeRecipes';
import SpMakeRecipes from './components/page/sp/SpMakeRecipes';
import PcRecipesInfo from './components/page/pc/PcRecipesInfo';
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
        <Route path="/MakeRecipes/:id" exact component={this.getMakeRecipes()} />
        <Route path="/RecipesInfo/:id" exact component={this.getHowToMake()} />
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