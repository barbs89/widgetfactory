//Packages & Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

//Routes
import Home from '../Home/Home';
import Navbar from '../Navbar';
import Account from '../Accounts';
import Login from '../Home/Login/Login';
import WidgetPage from '../Widget/WidgetPage';
import { WidgetCarousel } from '../Widget/carouselWidget/WidgetCarousel';

import axios from 'axios';
import logo from './remarkt-logo.png';
import './app.css';

function onAuthRequired({ history }) {
  history.push('/login');
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      email: null,
      adverts: null,
      images: null,
      redirectHome: false
    };
  }

  componentDidMount() {
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

  render() {
    // const adverts = this.state.adverts;
    // // if (!adverts) {
    // //   return <h1>Loading...</h1>;
    // // }
    return (
      <Router>
        <Security
          issuer="https://dev-917874.oktapreview.com/oauth2/default"
          client_id="0oag2l1yrkhrUnjVV0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home} />
              <SecureRoute exact path="/users" component={Account} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-917874.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />

              <SecureRoute
                exact
                path="/widgets"
                render={() => (
                  <WidgetPage
                    fetchAdds={this.fetchAdds}
                    adverts={this.state.adverts}
                  />
                )}
              />
              <Route
                exact
                path="/widgets/widgetpage/carousel"
                render={() => {
                  return <WidgetCarousel />;
                }}
              />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}
export default App;
