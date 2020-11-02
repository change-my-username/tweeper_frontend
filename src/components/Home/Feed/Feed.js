import React from 'react';
 
import classes from './Feed.css' 
import Tweet from '../Tweet/Tweet'

import { getFeed, sendFeed } from '../../../state/ducks/feed/actions'
import { getCurrentUser } from '../../../state/ducks/current_user/actions'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { isEmpty } from 'lodash'
 
class Feed extends React.Component { 

    componentDidMount(){
       
        
        if(!isEmpty(this.props.match.params)){

            return this.props.dispatch(getFeed(this.props.match.params.current_user))
        }

        this.props.dispatch(getFeed())
        
    }
    
    render() {
        return (
        <div className={classes.Feed}> 

          {
            this.props.feed.tweets.map((tweet, index) => {
                return (
                    <Tweet key={`${tweet.text}__${index}`} tweet={tweet} tweet_id={tweet.id} avatar={tweet.avatar} name={tweet.creator} text={tweet.text} likes={tweet.likes} publish_date={tweet.publish_date} />
                )
            }) 

        }
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    
    return {
        feed: state.feed,
        current_feed: state.current_user.feed
    }
}

export default withRouter(connect(mapStateToProps)(Feed));