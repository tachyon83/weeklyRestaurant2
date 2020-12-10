import React, { useState, useCallback } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Main from './component/Main';
import Login from './component/Login';
import Navigation from './component/Navigation';

const App = () => {
  const [islogin, setIslogin] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showList, setShowList] = useState(false);
  const [delteOnCalendar, setDelteOnCalendar] = useState(false);

  const handleLogin = useCallback(
    (props) => {
      setIslogin(!props);
    },
    [islogin],
  );

  const handleLogout = useCallback(
    (props) => {
      setIslogin(!props);
    },
    [islogin],
  );

  const handleShowDetail = useCallback(
    (props) => {
      setShowDetail(!props);
    },
    [showDetail],
  );

  const handleShowList = useCallback(
    (props) => {
      setShowList(!props);
    },
    [showList],
  );

  const handleDeleteOnCalendar = useCallback(
    (props) => {
      setDelteOnCalendar(!props);
    },
    [delteOnCalendar],
  );

  const handleCloseDetail = useCallback(
    (props) => {
      setShowDetail(!props);
    },
    [showDetail],
  );

  const handleCloseList = useCallback(
    (props) => {
      setShowList(!props);
    },
    [showList],
  );
  

  return(
    <Router>
      <Navigation islogin={islogin} onLogout={handleLogout} />
      <main>
        <div className="layoutWrap">
          <Switch>
            <Route exact path="/">
              <Main 
                islogin={islogin} 
                onShowDetail={handleShowDetail}
                onShowList={handleShowList}
                onDeleteOnCalendar={handleDeleteOnCalendar}
                showDetail={showDetail}
                showList={showList}
                onCloseDetail={handleCloseDetail}
                onCloseList={handleCloseList}
              />
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