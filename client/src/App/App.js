import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WidgetPage } from '../widget/WidgetPage';
import Home from '../Home/HomePage';
// import Navbar from '../Navbar'
import logo from './logo.svg';
import './app.css';
import axios from 'axios';

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
      })
      .catch((error) => console.info(error.message));
  }

  render() {
    const adverts = this.state.adverts;
    if (!adverts) {
      return <h1>Loading...</h1>;
    }
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
              return <Home />;
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
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
