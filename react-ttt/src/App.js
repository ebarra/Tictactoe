import React, { Component } from 'react';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default class App extends Component {
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
      let board = this.state.values.map((rowValues, rowIndex) => {
        let row = rowValues.map((value, columnIndex) => {
            let mykey = "" + rowIndex + columnIndex;
            return (
              <span key={mykey}>{value}</span>
            );
        });
        return (
           <div key={"fila" + rowIndex}>
             {row}
           </div>
        );
      });

      return (
        <div>
          <header className="header">
            {text}
          </header>
          {board}
        </div>
      );
  }

}
