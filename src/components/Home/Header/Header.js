import React from 'react';

import classes from './Header.css'
 
const Header = (props) => { 
    return (
        <div className={classes.Header}> 
            <div className={classes.Title}> Главная </div>
        </div>
    )
}
 
export default Header