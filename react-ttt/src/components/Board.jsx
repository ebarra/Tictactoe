import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.boardClick = this.boardClick.bind(this);
    }
    boardClick(numeroFila, numeroColumna) {
        this.props.appClick(numeroFila, numeroColumna);
    }
    render() {
        let board = this.props.values.map((rowValues, rowIndex) => {
            let row = rowValues.map((value, columnIndex) => {
                let mykey = "" + rowIndex + columnIndex;
                return (
                  <Square value={value} key={mykey} rowIndex={rowIndex} columnIndex={columnIndex} boardClick={this.boardClick}/>
                );
            });
            return (
               <div key={"row" + rowIndex}>
                 {row}
               </div>
            );
        });

        return (
           <div>
             {board}
           </div>
        );
    }
}
