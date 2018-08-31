import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';

const GlobalState = combineReducers({
    turn: turnReducer,
    values: gameReducer
});

export default GlobalState;
