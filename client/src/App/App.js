import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom'
import { WidgetPage } from '../Widget/WidgetPage';
// import Home from '../Home'
// import Navbar from '../Navbar'
import logo from './logo.svg';
import './app.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    const adverts = 'http://localhost:5000/adverts';

    //  parseAdds(() =>  {

    // })

    fetch(adverts)
      .then((response) => response.json())
      .then((advertData) => {
        console.log(advertData);
        // const adds = advertData.map(parseAdds)
      });

    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <WidgetPage />
      </div>
    );
  }
}
export default App;
