import React from 'react';

class Login extends React.Component {
  state = {
    loading: false,
    email: '',
    password: '',
    error: null
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            require="true"
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            require="true"
          />
          <button type="submit">
            {this.state.loading ? 'Loading' : 'Login'}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
