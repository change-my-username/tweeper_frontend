import React from 'react';

import {Link} from 'react-router-dom';

// import classes from './Tmp.css'
 
const main = (props) => { 
    return (

        <div> 
            <ul>
                <li>
                    <Link to="/home">Home Page</Link>
                </li>

                <li>
                    <Link to="/">Navigation</Link>
                </li>

                <li>
                <Link to="/signIn">Sign In Page</Link>
                </li>
            </ul>
            <h1 style={{margin:'40px'}}>
                Main page 
            </h1> 
        </div>
    )
}
 
export default main