import React from 'react';

const squareStyle = {
    height: '100px',
    width: '100px',
};

export default class Square extends React.Component {

    render() {
        return(
          <button style={squareStyle}>
            {this.props.value}
          </button>
        );
    }

}
