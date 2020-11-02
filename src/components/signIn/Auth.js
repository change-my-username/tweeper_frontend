import React from 'react';

// import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

import classes from  './Auth.css'
 
const Auth = (props) => { 
    return (
        <div className={classes.Auth}>
            {/* <Login /> */}
            <SignUp />
        </div>
       
    )
}
 
export default Auth