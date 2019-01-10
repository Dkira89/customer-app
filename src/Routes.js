import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer'

class Rutas extends Component{
    render = () => (
        <div>
          <Route exact path="/" component = {()=><HomeContainer></HomeContainer>}></Route>
          <Route exact path="/customers" component = {()=><CustomerContainer></CustomerContainer>}></Route>
          <Switch>
            <Route exact path="/customers/new" component = {<h1>Customer List Container</h1>}></Route>
            <Route exact path="/customers/:dni/edit" 
                   render = {props=><CustomerContainer dni={props.match.params.dni}></CustomerContainer>}>
            </Route>
            <Route exact path="/customers/:dni" 
                   render = {props=><CustomerContainer dni={props.match.params.dni}></CustomerContainer>}>
            </Route>
          </Switch>
        </div>
    );
};

export default Rutas;