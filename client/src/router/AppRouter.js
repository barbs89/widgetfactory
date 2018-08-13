import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../homePage/HomePage'

import './AppRouter.scss'


// TODO: create form handlers

  // TODO: handleShow

  // TODO: HandleSubmit

  // TODO: HandleOnChange


const AppRouter = () => (
  <BrowserRouter>

    <div className="AppRouter">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/widget">Widget</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/widget/" component={WidgetPage}/>
        <Route path="/user" component={UserPage}/>
      </Switch>
    </Router>
    </div>

  </BrowserRouter>
)

export { AppRouter }
