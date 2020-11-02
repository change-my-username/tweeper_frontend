import React from 'react';
 
import classes from './Other.css' 

import CurrentTopics from './CurrentTopics/CurrentTopics'
 
const Other = (props) => { 
    return (
        <div className={classes.Other}>
            <CurrentTopics />
            
        </div>
    )
}
 
export default Other