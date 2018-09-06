
import {PLAYERX, PLAYER0} from '../constants/constants';

function turnReducer(state = PLAYERX, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
        return action.turn === PLAYERX ? PLAYER0 : PLAYERX;
    case 'FETCH_STATE_SUCCESS':
        return action.state.turn;
    default:
        return state;
    }
}

export default turnReducer;
