import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
// import Register from './Register';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'login'
    };
  }
  handleFormToggle = (e) => {
    this.setState({ formState: e.target.name });
  };
  showUserForms = () => {
    const showUserForms = !this.props.loggedIn && (
      <React.Fragment>
        {this.state.formState === 'login' && (
          <Login
            loggedIn={this.props.loggedIn}
            handleLogin={this.props.handleLogin}
          />
        )}
      </React.Fragment>
    );
    return showUserForms;
  };

  render() {
    return <React.Fragment>{this.showUserForms()}</React.Fragment>;
  }
}

Home.propTypes = {
  loggedIn: PropTypes.bool,
  handleLogin: PropTypes.func
};

Home.defaultProps = {
  loggedIn: null,
  handleLogin: null
};
export default Home;
