import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from '../components/CustomerActions';
import './homestyle.css';
class HomeContainer extends Component {
    handleOnClick= ()=>{
        console.log("click")
        this.props.history.push("/customers");
    }
    render() {
        return (
            <div className ="home-container">
                <AppFrame header='Home'
                          body={
                              <div>Esta es la pantalla inicial
                                   <CustomerActions>
                                       <button onClick={this.handleOnClick}>Listado de clientes</button>
                                   </CustomerActions>
                              </div>
                          }
                          ></AppFrame>
            </div>
        );
    }
}


export default withRouter(HomeContainer);