import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        turn: PLAYERX,
        values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
        ],
    };
  }

  render() {
    let text = "Turn of " + this.state.turn;

    return (
      <div>
        <Header text={text}/>
        <Board values={this.state.values}/>
      </div>
    );
}

}
