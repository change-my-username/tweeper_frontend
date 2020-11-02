import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

import classes from './Presentation.css'
 
const presentation = (props) => { 

    const presentationSlogans = [
                                    {   text: 'Читайте о том, что вам интересно.', 
                                        icon: (<SearchIcon fontSize="large" className={classes.SloganIcon} />)
                                    },

                                    {   text: 'Узнайте, о чем говорят в мире.', 
                                        icon: (<PeopleOutlineIcon fontSize="large" className={classes.SloganIcon} />)
                                    },

                                    {   text: 'Присоединяйтесь к общению.', 
                                        icon: (<ChatBubbleOutlineIcon fontSize="large" className={classes.SloganIcon} />)
                                    },
                            ]
                            .map((slogan) => (
                                    <li key={slogan.text} className={classes.SloganItem}>
                                        {slogan.icon}
                                        {slogan.text}
                                    </li>
                                )
                            )

    return (
        <div className={classes.Presentation}> 
            <TwitterIcon className={classes.BgTwitterIcon}/>
            <ul className={classes.SloganList}>
                {presentationSlogans}
            </ul>
        </div>
    )
}
 
export default presentation
