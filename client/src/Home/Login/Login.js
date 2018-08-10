import React from 'react';

class Login extends React.Compnent {
  state = {
    loading: false,
    email: null,
    password: null
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hundleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            require
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            require
          />
          <button type="submit">
            {this.state.loading ? 'Loading' : 'Login'}
          </button>
        </form>
      </div>
    )
  }
}

export default Login;
