import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import './index.css';
import HomeContainer from './containers/HomeContainer';
import Rutas  from './Routes';

class App extends Component {
  renderCustomerListContainer = () => <h1>Customer List Container</h1>
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
          <Rutas></Rutas>
      </Router>
      
    );
  }
}

export default App;
