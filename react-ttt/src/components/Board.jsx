import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
    render() {
        let board = this.props.values.map((rowValues, rowIndex) => {
            let row = rowValues.map((value, columnIndex) => {
                let mykey = "" + rowIndex + columnIndex;
                return (
                  <Square value={value} key={mykey}/>
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
