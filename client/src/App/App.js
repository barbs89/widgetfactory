//Packages & Dependencies
import React, { Component } from 'react';

//Routes
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import WidgetPage from '../Widget/WidgetPage';
import { WidgetCarousel } from '../Widget/carouselWidget/WidgetCarousel';
import Navbar from '../Navbar';
import Account from '../Accounts';

// Helper
import usersAPI from '.././Helpers/usersAPI';

import axios from 'axios';
import logo from './remarkt-logo.png';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      loggedIn: false,
      email: null,
      authToken: null,
      adverts: null,
      images: null,
      redirectHome: false
    };
  }

  componentDidMount() {
    this.handleMount();
    axios
      .get('http://localhost:5000/widgets')
      .then((response) => {
        // Adverts  //
        this.setState({ adverts: response.data.adverts.data });
        console.log(response.data.adverts.data);
        // Images //
        this.setState({ images: response.data.images.data.data });
        console.info(response.data.images.data.data);
      })
      .catch((error) => console.log(error.message));
  }

  handleMount = async () => {
    const authHeader = localStorage.getItem('authorization');
    if (authHeader) {
      try {
        const authToken = authHeader.split(' ')[1];
        const res = await usersAPI.getUser(authToken);
        const { user } = res;
        this.setState(() => ({
          loggedIn: true,
          email: user.email,
          authToken
        }));
      } catch (error) {
        console.log(error);
        this.setState(() => ({ authToken: null }));
      }
    }
    this.setState(() => ({ loaded: true }));
  };

  handleLogin = async (inputEmail, inputPassword) => {
    try {
      const res = await usersAPI.loginUser(inputEmail, inputPassword);
      const { user, authToken } = res;
      this.setState(() => ({
        loggedIn: true,
        email: user.email,
        authToken
      }));
      localStorage.setItem('authorization', `Bearer ${authToken}`);
    } catch (error) {
      // this.setState({ loggedIn: false });
      throw error;
    }
  };

  handleLogout = async () => {
    try {
      await usersAPI.logoutUser(this.state.authToken);
      localStorage.removeItem('authorization');
      this.setState(() => ({
        loggedIn: false,
        email: null,
        authToken: null
      }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  render() {
    // const adverts = this.state.adverts;
    // // if (!adverts) {
    // //   return <h1>Loading...</h1>;
    // // }
    return (
      <React.Fragment>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <p className="App-intro">{this.state.response}</p>
        </div> */}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route
              path="/users"
              render={() => (
                <Account
                  loggedIn={this.state.loggedIn}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              exact
              path="/widgets"
              render={() => (
                <WidgetPage
                  fetchAdds={this.fetchAdds}
                  adverts={this.state.adverts}
                />
                // ) : (
                //   <Redirect to="/" />
              )}
            />
            <Route
              exact
              path="/widgets/widgetpage"
              render={() => {
                return (
                  <WidgetPage
                    fetchAdds={this.fetchAdds}
                    adverts={this.state.adverts}
                  />
                );
              }}
            />
            <Route
              exact
              path="/widgets/widgetpage/carousel"
              render={() => {
                return <WidgetCarousel />;
              }}
            />
            <Redirect from="/widgets/*" to="/widgets" />
            <Redirect from="/users/*" to="/users" />
            <Redirect to="/" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
