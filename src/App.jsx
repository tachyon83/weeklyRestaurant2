import React, { useState, useCallback } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Main from './component/Main';
import Login from './component/Login';
import Navigation from './component/Navigation';

const App = () => {
  const [islogin, setIslogin] = useState(false);

  const handleLogin = useCallback(
    (props) => {
      setIslogin(!props);
    },
    [islogin],
  );

  const handleLogout = useCallback(
    (props) => {
      console.log(props)
      setIslogin(!props);
    },
    [islogin],
  );

  return(
    <Router>
      <Navigation islogin={islogin} onLogout={handleLogout} />
      <main>
        <div className="layoutWrap">
          <Switch>
            <Route exact path="/">
              <Main islogin={islogin} />
            </Route>
            <Route path="/login">
              {islogin
                ? <Redirect to="/"/>
                : <Login onLogin={handleLogin} isLogin={islogin} />
              }
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  )
}

export default App;