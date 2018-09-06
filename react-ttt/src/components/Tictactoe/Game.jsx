import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import { connect } from 'react-redux';
import { playPosition, fetchState } from './../../reducers/actions';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.appClick = this.appClick.bind(this);
  }
  appClick(rowNumber, columnNumber) {
      this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn, this.props.values));
  }
  componentDidMount(){
    console.log("componentDidMount");
    if(this.props.continue===true){
      this.props.dispatch(fetchState());
    }
  }
  render() {
    if(this.props.fetch.fetching){
      return <h3>Wait while we fetch the saved game</h3>;
    } else if(this.props.fetch.fetching===false && this.props.fetch.error){
      console.log(this.props.fetch.error);
      return <h3>Error getting state from server. The error was: {this.props.fetch.error.toString()}</h3>;
    }else{
      let text = "Turn of " + this.props.turn;
      return (
        <div>
          <Header text={text}/>
          <Board values={this.props.values}  appClick={this.appClick}/>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
    return {
        values: state.values,
        turn: state.turn,
        fetch: state.fetch
    };
}
export default connect(mapStateToProps)(Game);
