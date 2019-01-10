import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './index.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  renderHome = () =><HomeContainer></HomeContainer>
  renderCustomerContainer = () => <CustomersContainer></CustomersContainer>
  renderCustomerListContainer = () => <h1>Customer List Container</h1>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component = {this.renderHome}></Route>
          <Route exact path="/customers" component = {this.renderCustomerContainer}></Route>
          <Switch>
            <Route exact path="/customers/new" component = {this.renderCustomerNewContainer}></Route>
            <Route exact path="/customers/:dni/edit" 
                   render = {props=><CustomerContainer dni={props.match.params.dni}></CustomerContainer>}>
            </Route>
            <Route exact path="/customers/:dni" 
                   render = {props=><CustomerContainer dni={props.match.params.dni}></CustomerContainer>}>
            </Route>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
