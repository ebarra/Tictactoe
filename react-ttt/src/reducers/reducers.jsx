import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnReducer from './turnReducer';
import fetchReducer from './fetchReducer';
import playerReducer from './playerReducer';

const GlobalState = combineReducers({
    turn: turnReducer,
    values: gameReducer,
    fetch: fetchReducer,
    player_name: playerReducer
});

export default GlobalState;
