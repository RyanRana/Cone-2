import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import firebase from './firebase';
import GenerateQRCode from './components/GenerateQRCode';
import ScanQRCode from './components/ScanQRCode';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const user = firebase.auth().currentUser;

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Generate</Link>
            </li>
            <li>
              <Link to="/scan">Scan</Link>
            </li>
            {user ? (
              <li>
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={GenerateQRCode} />
          <Route path="/scan" component={ScanQRCode} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
