import React from 'react';

import classes from './SignIn.css'

import Aux from '../../hoc/Auxiliary'

// import Footer from '../../components/signIn/Footer'
import Presentation from '../../components/signIn/Presentation'
import Auth from '../../components/signIn/Auth'

const SignIn = (props) => { 
      
    return (
        <Aux>
            <div className={classes.Main}> 
                <Presentation/>
                <Auth/>
            </div>
            {/* <Footer/> */}

        </Aux>
       
    )
}
 
export default SignIn