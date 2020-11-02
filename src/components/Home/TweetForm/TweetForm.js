import React from 'react';
 
import classes from './TweetForm.css' 
import SendTweet from '../../utils/signButton'
import { Link } from 'react-router-dom';

import { addTweet } from '../../../state/ducks/feed/actions'

import { connect } from 'react-redux'
 
const TweetForm = (props) => { 

    const tweetHandler = () => {
        const text = document.querySelectorAll('div[contentEditable]')[0];
        
        if(text.textContent){
            props.dispatch(addTweet({
                                        id: Date.now(),
                                        text: text.textContent,
                                        likes: 0,
                                        feed_id: props.feed_id,
                                        publish_date: Date.now(),
                                        who_liked: []
                                        
                                    }
                            )
            )
            text.textContent = null;
        }
        
    }

    return (
        <div className={classes.Wrapper}> 

            <div className={classes.AvatarWrapper}>
                <Link className={classes.AvatarLink} to="/home" >

                            <img className={classes.Avatar} src={props.avatar} alt="Аватар">
                            </img>
                   
          
                </Link>

            </div>

            <div className={classes.TweetFormWrapper}>
                  
                        <div className={classes.TweetForm} contentEditable placeholder="Что происходит?" aria-multiline="true">
                        
                        </div> 

                <SendTweet onClick={tweetHandler} className={classes.SendTweet} > Твитнуть </SendTweet>

            </div>
        </div>
    )
}
 
const mapStateToProps = (store) => {
    return {
        feed_id: store.user.feed,
        avatar: store.user.avatar,
    }
}

export default connect(mapStateToProps)(TweetForm);