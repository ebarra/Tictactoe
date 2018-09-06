import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';
import fetchReducer from './fetchReducer';

const GlobalState = combineReducers({
    turn: turnReducer,
    values: gameReducer,
    fetch: fetchReducer
});

export default GlobalState;
