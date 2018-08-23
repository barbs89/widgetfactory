import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      email: '',
      password: ''
    };
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await this.props.handleLogin(this.state.email, this.state.password);
      if (this.state.error) {
        this.setState({ error: false });
      }
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              required
            />
            {this.state.error && (
              <div className="error">Invalid Combination</div>
            )}
            <button type="submit">
              {this.state.loading ? 'Loading' : 'Login'}
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func
};

Login.defaultProps = {
  handleLogin: null
};

export default Login;
