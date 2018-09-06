import React from 'react';
import { Route } from 'react-router-dom';
import Game from './Tictactoe/Game';
import Home from './Home';

export default class Main extends React.Component {
    render() {
        return (
          <nav>
            <Route exact path='/' component={Home}/>
            <Route path='/new' component={Game}/>
            <Route path='/continue' render={()=> <Game continue={true}/>}/>
          </nav>
        );
    }

}
