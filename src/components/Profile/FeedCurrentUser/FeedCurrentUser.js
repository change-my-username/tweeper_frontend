import React, {useEffect} from 'react';
 
import classes from './FeedCurrentUser.css' 
import Tweet from '../../Home/Tweet/Tweet'

import { getCurrentUser } from '../../../state/ducks/current_user/actions'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
 
const FeedCurrentUser = (props) => {   

    const { current_user } = useParams();
 

    useEffect(() => {
        props.dispatch(getCurrentUser(current_user))
    }, [])

    return (
        <div className={classes.FeedCurrentUser}> 

            {props.feed.tweets.map((tweet, index) => {
                return (
                    <Tweet key={`${tweet.text}__${index}`} user="current_user" feed_id={tweet.feed_id} avatar={tweet.avatar} name={tweet.creator} text={tweet.text} likes={tweet.likes} publish_date={tweet.publish_date} />
                )
            })
            .reverse()
            }

        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        feed: state.current_user.feed,
    }
}

export default connect(mapStateToProps)(FeedCurrentUser);