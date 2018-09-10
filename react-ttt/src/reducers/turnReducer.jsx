
import {PLAYERX, PLAYER0} from '../constants/constants';

function turnReducer(state = PLAYERX, action) {
    switch (action.type) {
    case 'PLAY_POSITION':
        return action.turn === PLAYERX ? PLAYER0 : PLAYERX;
    default:
        return state;
    }
}

export default turnReducer;
