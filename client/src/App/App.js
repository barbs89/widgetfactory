//Packages & Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WidgetPage } from '../widget/WidgetPage';
import { HomePage } from '../Home/HomePage';
import axios from 'axios';
//Page Components

// import Navbar from '../Navbar';
import logo from './logo.svg';
import './app.css';

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
    adverts: ''
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/widgets')
      .then((response) => {
        this.setState({ adverts: response.data });
        console.log(this.state.adverts);
        console.log(response);
      })
      .catch((error) => console.info(error.message));
  }

  render() {
    // const adverts = this.state.adverts;
    // if (adverts) {
    //   return <h1>Loading...</h1>;
    // }
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
