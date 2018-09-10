import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import { connect } from 'react-redux';
import { playPosition, fetchState, newPlayer } from './../../reducers/actions';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {player_name: ""};
    this.appClick = this.appClick.bind(this);
    this.handlePlayerInputChange = this.handlePlayerInputChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  }
  appClick(rowNumber, columnNumber) {
      this.props.dispatch(playPosition(rowNumber, columnNumber, this.props.turn, this.props.values));
  }
  handlePlayerInputChange(event){
    this.setState({player_name: event.target.value});
  }
  handlePlayerSubmit(event) {
    console.log('A name was submitted: ' + this.state.player_name);
    event.preventDefault();
    this.props.dispatch(newPlayer(this.state.player_name));
  }
  componentDidMount(){
    console.log("componentDidMount");
    if(this.props.continue===true){
      this.props.dispatch(fetchState());
    }
  }
  render() {
    if(this.props.fetch.fetching){
      return <div className="loader"></div>;
    } else if(this.props.fetch.fetching===false && this.props.fetch.error){
      console.log(this.props.fetch.error);
      return <h3>Error getting state from server. The error was: {this.props.fetch.error.toString()}</h3>;
    }else{
      if(this.props.player_name!==""){
          let welcome_text = "Welcome " + this.props.player_name;
          let text = "Turn of " + this.props.turn;
          return (
            <div>
              <Header text={text} welcome_text={welcome_text}/>
              <Board values={this.props.values}  appClick={this.appClick} />
            </div>
          );
      } else {
          return (<header className="header">
            <form onSubmit={this.handlePlayerSubmit}>
              <label>
                Introduce Player Name:
                <input type="text" value={this.state.player_name} onChange={this.handlePlayerInputChange} />
                <input type="submit" value="Submit" />
              </label>
            </form>
          </header>
        );
      }
    }
  }
}

function mapStateToProps(state) {
    return {
        values: state.values,
        turn: state.turn,
        fetch: state.fetch,
        player_name: state.player_name
    };
}
export default connect(mapStateToProps)(Game);
