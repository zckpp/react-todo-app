import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import { getIsLoggedin } from './components/selectors';
import { useCookies } from 'react-cookie';
import { setIsLoggedin } from './components/actions'

const App = ({ isLoggedin, onSetIsLoggedin }) => {
  const [cookies, setCookie] = useCookies(['isLoggedin']);

  useEffect(() => {
    // check cookie if login when init
    onSetIsLoggedin(cookies.isLoggedin);
  }, []);

  // update cookie when login
  useEffect(() => {
    if (isLoggedin) {
      setCookie('isLoggedin', true, { path: '/' });
    } else {
      // if not login in state, check cookie
      onSetIsLoggedin(cookies.isLoggedin);
    }
  }, [isLoggedin]);

  return (
    <Router>
      <div className="App">
        {
          isLoggedin
          ? <Redirect to="/dashboard" />
          : <Route exact path="/" component={Login} />
        }
        <PrivateRoute path="/dashboard" component={Dashboard} isLoggedin={isLoggedin} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  isLoggedin: getIsLoggedin(state),
});

const mapDispatchToProps = dispatch => ({
	onSetIsLoggedin: (isLoggedin) => dispatch(setIsLoggedin(isLoggedin))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);