import { createAction } from 'redux-actions';
import { UPD_CUSTOMER } from '../constants/constants';
import { apiPut } from '../API';
import { urlCustomers } from '../API/urls';


export const updateCustomer = createAction(UPD_CUSTOMER,(id, customer)=>apiPut(urlCustomers,id,customer)());
