import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import {isAuth} from './isAuth'

 
const RedirectRoute = ({component: Component, ...rest}) => { 
    return (
        <Route {...rest} render={ () => isAuth() ? <Redirect to="/home" /> : <Component/>  }  />
    )
}
 
export default RedirectRoute