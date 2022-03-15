import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={(props) => <Component {...props}/>}/>
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType
};

export default PrivateRoute;