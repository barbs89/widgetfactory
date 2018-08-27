import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WidgetPage } from '../widget/WidgetPage';
import {WidgetCarousel } from '../widget/carouselWidget/WidgetCarousel';
import Home from '../home/HomePage';
// import Navbar from '../Navbar'
import logo from './remarkt-logo.png';
import './app.css';
import axios from 'axios';

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
        this.setState({ adverts: response.data.adverts.data })
        console.log(response.data.adverts.data) 
        // Images // 
        this.setState({ images: response.data.images.data.data})
        console.info(response.data.images.data.data)
      })
      .catch((error) => console.log(error.message))
  }

  render() {
    const adverts = this.state.adverts;
    // if (!adverts) {
    //   return <h1>Loading...</h1>;
    // }
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
              return (
                <WidgetCarousel/>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
