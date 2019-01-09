import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './index.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderHome = () =><h1>Home</h1>
  renderCustomerContainer = () => <h1>Customer Container</h1>
  renderCustomerListContainer = () => <h1>Customer List Container</h1>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component = {HomeContainer}></Route>
          <Route exact path="/customers" component = {this.renderCustomerContainer}></Route>
          <Switch>
            <Route exact path="/customers/new" component = {this.renderCustomerNewContainer}></Route>
            <Route exact path="/customers/:dni" component = {this.renderCustomerListContainer}></Route>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
