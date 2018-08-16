import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { WidgetPage } from '../widget/WidgetPage';
import Home from '../home/HomePage'
// import Navbar from '../Navbar'
import logo from './logo.svg';
import './app.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: '',
    adverts: null
  };

  componentDidMount() {
    
    axios.get('http://localhost:5000/widgets')  
      .then(response =>  console.log(response.data))
      .catch(error => console.info(error.message))
    
  };

  render() {
    return (
      <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
         {/* TODO: Routes for register and Login SC */}

          < Route exact path="/" render={() => {
            return < Home />
          }} />

          < Route exact path="/widgets" render={() => {
          return <WidgetPage fetchAdds={ this.fetchAdds }/> }}/>
        
      </div>
    </ BrowserRouter >
    );
  }
}
export default App;
