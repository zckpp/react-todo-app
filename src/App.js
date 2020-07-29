import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import { getIsLoggedin } from './components/selectors';
import { useCookies } from 'react-cookie';
import { setIsLoggedinFromCookie } from './components/actions'

const App = ({ isLoggedin, onSetIsLoggedinFromCookie }) => {
  const [cookies, setCookie] = useCookies(['isLoggedin']);

  useEffect(() => {
    onSetIsLoggedinFromCookie(cookies.isLoggedin);
  }, []);

  return (
    <Router>
      <div className="App">
        {
          isLoggedin
          ? <PrivateRoute path="/dashboard" component={Dashboard} isLoggedin={isLoggedin} />
          : <Route exact path="/" component={Login} />
        }
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  isLoggedin: getIsLoggedin(state),
});

const mapDispatchToProps = dispatch => ({
	onSetIsLoggedinFromCookie: () => dispatch(setIsLoggedinFromCookie())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);