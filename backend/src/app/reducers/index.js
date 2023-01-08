import { combineReducers } from 'redux'; 
import authReducer from "./auth"
import sessionReducer from './session';

export default combineReducers({ 
  auth: authReducer,
  session: sessionReducer
})
