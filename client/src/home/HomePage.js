import React from 'react';
import Login from './Login';
import Register from './Register';

class HomePage extends React.Component {

  render () {
    return (
      <Login
        loggedIn={this.props.loggedIn}
        handleLogin={this.props.handleLogin}
      />
    )
  }
}

export default HomePage;
