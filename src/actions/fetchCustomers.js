import { FETCH_CUSTOMERS } from './../constants/constants';
import {createAction} from 'redux-actions';
import { urlCustomers } from './../API/urls';
import { apiGet } from './../API';


const payloadCreator = () =>(apiGet(urlCustomers));
export const fetchCustomers = createAction(FETCH_CUSTOMERS,payloadCreator);

