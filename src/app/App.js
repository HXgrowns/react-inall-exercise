import React, {Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './app.scss';
import Home from "../components/Home";
import Calculator from "../components/Calculator";
import Timer from "../components/Timer";

class App extends Component {
  render() {
    return (
      <BrowserRouter className="app">
        <header className="header">
          <nav className="nav">
            <NavLink activeClassName="active-link" exact className="link" to="/">HOME</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/calculator">在线计算器</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/timer">在线倒计时器</NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
          <Route exact path='/timer' component={Timer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
