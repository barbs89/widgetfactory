import React from 'react';
import Login from './Login';
import Register from './Register';

class Home extends React.Component {

  render () {
    return (
      <Login
        loggedIn={this.props.loggedIn}
        handleLogin={this.props.handleLogin}
      />
    )
  }
}

export default Home;
