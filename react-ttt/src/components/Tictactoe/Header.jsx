import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
          <header className="header">
            <h3>{this.props.welcome_text}</h3>
            <h3>{this.props.text}</h3>
          </header>
        );
    }
}
