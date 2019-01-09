import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomerActions from './../actions/CustomerActions';
class HomeContainer extends Component {
    handleOnClick= ()=>{
        console.log("click")
    }
    render() {
        return (
            <div>
                <AppFrame header='Home'
                          body={
                              <div>Esta es la pantalla inicial
                                   <CustomerActions>
                                       <button onClick={this.handleOnClick}>Listado de clientes</button>
                                        <Link to ="/customers">Listado de clientes</Link>
                                   </CustomerActions>
                              </div>
                          }
                          ></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;