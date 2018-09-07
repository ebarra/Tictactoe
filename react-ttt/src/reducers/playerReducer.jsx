
function playerReducer(state = "", action) {
    switch (action.type) {
    case 'NEW_PLAYER':
        return action.player_name;
    case 'FETCH_STATE_SUCCESS':
      let player_name = action.state.player_name ? action.state.player_name:"";
      return player_name;
    default:
        return state;
    }
}

export default playerReducer;
