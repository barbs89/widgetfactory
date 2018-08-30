import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    console.log(this.state);
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>You have reached the authorized staff area of the portal</p>
        <Link to="/widgets">
          <button className="btn btn-light btn-lg">View Widgets</button>
        </Link>
      </div>
    );
  }
}

export default Account;
