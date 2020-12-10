import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Main from './component/Main';
import Login from './component/Login';
import Navigation from './component/Navigation';

const App = () => {
  return(
    <Router>
      <Navigation />
      <main>
        <div className="layoutWrap">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  )
}

export default App;