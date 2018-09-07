import {API} from '../constants/constants';


export function playPosition(x, y, turn, values) {
    return{
        type: 'PLAY_POSITION',
        x: x,
        y: y,
        turn: turn,
        values: values
    };
}


export function fetchState() {
  return dispatch => {
    dispatch(fetchStateBegin());
    return fetch(API)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log("JSON Received: ", json);
        dispatch(fetchStateSuccess(json));
        return json;
      })
      .catch(error => {
        console.log(error);
        return dispatch(fetchStateFailure(error))
      });
  };
}

export function fetchStateBegin() {
  return {  type: 'FETCH_STATE_BEGIN' };
}

export function fetchStateSuccess(json_received) {
  return {
    type: 'FETCH_STATE_SUCCESS',
    state: json_received
  };
}

export function fetchStateFailure(error) {
  return {
    type: 'FETCH_STATE_FAILURE',
    error: error
  };
}

export function newPlayer(player_name) {
  return {
    type: 'NEW_PLAYER',
    player_name: player_name
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    console.log("ERROR! " + response.statusText);
    throw Error(response.statusText);
  }
  return response;
}
