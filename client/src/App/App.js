import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WidgetPage } from '../widget/WidgetPage';
import Home from '../home/HomePage';
// import Navbar from '../Navbar'
import logo from './logo.svg';
import './app.css';
import axios from 'axios';

class App extends Component {
  state = {
    adverts: null,
    images: null
  };


 async componentDidMount() {
  
    
    // this makes a call to the routes(widgetsRouter) to hit the api //
      axios
      .get('http://localhost:5000/widgets')
      .then((response) => {
        // Adverts   .data.adverts.data.data.id//
        var adverts = response.data.adverts.data 
        this.setState({ adverts: response.data.adverts.data })
        console.log(this.state.adverts)
         
        // Images // 
        var images = response.data.images.data.data
        this.setState({ images: response.data.images.data.data })
        console.log(this.state.images)
        return {adverts, images}
        })
        .catch((error) => console.log(error.message))
      }
    



    render() {
      const adds = this.state.adverts
      
    if (!adds) {
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
