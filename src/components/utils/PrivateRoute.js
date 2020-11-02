import React from 'react'
import { Route, Redirect } from 'react-router-dom';

import {isAuth} from './isAuth'

const PrivateRoute = ({component: Component, ...rest}) => { 

    return (
        <Route {...rest} render={ () => isAuth() ? <Component/> : <Redirect to="/" /> }  />
    )
}
 
export default PrivateRoute