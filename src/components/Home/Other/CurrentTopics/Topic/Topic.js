import React from 'react';
 
import classes from './Topic.css' 
 
const Topic = (props) => { 
    return (
        <div className={classes.Topic}>

            <div className={classes.TopicCategory}>
                Актуальные темы: Актуально
            </div>

            <div className={classes.TopicName}>
                #COVID19
                
            </div>

            <div className={classes.TopicCounter}>
                Твитов: <span>329</span>
            </div>
         </div>
    )
}
 
export default Topic