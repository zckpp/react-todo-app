import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  
  return(
    <Route {...rest} render={(props) => (
      isLoggedin
      ? <Component {...props} /> 
      : <Redirect to="/" />
    )}
    />
  );
}

export default PrivateRoute;