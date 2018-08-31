import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
          <header className="header">
            {this.props.text}
          </header>
        );
    }

}
