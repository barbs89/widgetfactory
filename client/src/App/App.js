//Packages & Dependencies
import React, { Component } from 'react';
// import { Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WidgetPage } from '../widget/WidgetPage';
import { HomePage } from '../Home/HomePage';
import axios from 'axios';
//Page Components

// import Navbar from '../Navbar';
import logo from './logo.svg';
import './app.css';

// const config = {
//   issuer: 'https://{yourOktaDomain}/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '{clientId}'
// };

// const AuthRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       checkAuth() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/login' }} />
//       )
//     }
//   />
// );

class App extends Component {
  state = {
    adverts: null,
    images: null
  };

  componentDidMount() {
    // this makes a call to the routes(widgetsRouter) to hit the api //
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
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">{this.state.response}</p>
          {/* TODO: Routes for register and Login SC */}

          <Route
            exact
            path="/"
            render={() => {
              return <HomePage />;
            }}
          />

          <Route
            exact
            path="/widgets"
            render={() => {
              return (
                <WidgetPage
                  fetchAdds={this.fetchAdds}
                  adverts={this.state.adverts}
                />
              );
            }}
          />
          {/* <Route
              exact
              path="/widgets/1"
              render={() => {
                return (
                  <WidgetPage
                    fetchAdds={this.fetchAdds}
                    adverts={this.state.adverts}
                  />
                );
              }}
            /> */}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
