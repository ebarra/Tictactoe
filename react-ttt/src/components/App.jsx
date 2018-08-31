import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import { connect } from 'react-redux';
import { playPosition } from './../reducers/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appClick = this.appClick.bind(this);
  }
  appClick(rowNumber, columnNumber) {
      this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn, this.props.values));
  }
  render() {
    let text = "Turn of " + this.props.turn;
    return (
      <div>
        <Header text={text} winner={this.props.winner}/>
        <Board values={this.props.values}  appClick={this.appClick} winner={this.props.winner}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        values: state.values,
        turn: state.turn
    };
}
export default connect(mapStateToProps)(App);
