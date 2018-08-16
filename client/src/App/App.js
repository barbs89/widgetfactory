import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { WidgetPage } from '../widget/WidgetPage';
import Home from '../home/HomePage'
// import Navbar from '../Navbar'
import logo from './logo.svg';
import './app.css';

class App extends Component {
  state = {
    response: '',
    adverts: null
  };

  componentDidMount() {
    
     
    fetch('http://localhost:5000/widgets')
    .then(response => response.json())
    .then(response => {
     console.log(response)
      // const adds = advertData.map(parseAdds)
    })
    .catch(err => console.error(err.message))
    
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
    };
  }

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
          return <WidgetPage /> }}/>
        
      </div>
    </ BrowserRouter >
    );
  }
}
export default App;
