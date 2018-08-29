import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'login'
    };
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
