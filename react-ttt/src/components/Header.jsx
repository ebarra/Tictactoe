import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
          <header>
            <h1>Welcome to Tic Tac Toe!</h1>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/new">New Game</NavLink>
                <NavLink exact to="/continue">Continue</NavLink>
            </nav>
          </header>
        );
    }

}
