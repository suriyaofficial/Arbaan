import {createStore,combineReducers}from 'redux';
import { loginReducer } from './loginReducer';
import { userReducer } from './userRedducer';
import { nameReducer } from './nameReducer';
const rootReducer=combineReducers({
    login:loginReducer,
    user:userReducer,
    name:nameReducer,

})
export const store =createStore(rootReducer)
