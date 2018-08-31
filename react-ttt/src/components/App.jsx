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
    this.appClick = this.appClick.bind(this);
    }

    appClick(rowNumber, columnNumber) {
        let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
        let newMovement = this.state.turn === PLAYERX ? 'X' : '0';
        valuesCopy[rowNumber][columnNumber] = newMovement;
        this.setState({
            turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
            values: valuesCopy,
        });
    }

  render() {
    let text = "Turn of " + this.state.turn;

    return (
      <div>
        <Header text={text}/>
        <Board values={this.state.values}  appClick={this.appClick}/>
      </div>
    );
}

}
