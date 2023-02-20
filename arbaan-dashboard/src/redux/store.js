import {createStore,combineReducers}from 'redux';
import { loginReducer } from './loginReducer';
import { userReducer } from './userRedducer';
import { nameReducer } from './nameReducer';
import { summaryReducer } from './summary';
const rootReducer=combineReducers({
    login:loginReducer,
    user:userReducer,
    name:nameReducer,
    summary:summaryReducer

})
export const store =createStore(rootReducer)
