import React from 'react';
 
import classes from './CurrentTopics.css' 

import Topic from './Topic/Topic'
 
const CurrentTopics = (props) => { 
    return (
        <div className={classes.CurrentTopics}> 
            <div className={classes.Header}> 
                Актуальные темы для вас
            </div>

            <Topic />
            <Topic />
            <Topic />
            <Topic />   
            <Topic />
            <Topic />
            
            <button className={classes.ExpandButton}> Показать еще </button>

        </div>
    )
}
 
export default CurrentTopics;