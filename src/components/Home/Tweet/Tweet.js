import React from 'react';
 
import classes from './Tweet.css' 

import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { GoComment as CommentIcon } from 'react-icons/go';
import { AiOutlineRetweet as RetweetIcon, AiOutlineHeart as LikeIcon, AiFillHeart as LikeIconFill } from 'react-icons/ai'

import { GiSpiralLollipop as TmpIcon} from 'react-icons/gi'

import { connect } from 'react-redux'

import { likeTweet } from '../../../state/ducks/feed/actions'

class Tweet extends React.Component { 

    LikeHandler = () => {
        
        this.props.dispatch(likeTweet(this.props.tweet, this.props.user_id))

    }

    getDateDiff = (publish_date) => {
        let diff = (Date.now() - publish_date ) / 1000;

        if(diff < 60)
            return Math.round(diff) + ' c';

        diff /= 60;

        if(diff < 60)
            return Math.round(diff) + ' мин';

        diff /= 24;

        if(diff < 24)
            return Math.round(diff) + ' ч'


        return Math.round(diff/24) + ' д';

    }

    render() {
        
        return (
            <div className={classes.Tweet}> 
                
                <div className={classes.AvatarWrapper}>
                    <Link  className={classes.AvatarLink} to="/home" > 
                        <Avatar alt="Аватар" src={this.props.avatar} />
                    </Link>
                </div>

                <div className={classes.TextWrapper} >
                        <div className={classes.TweetInfo} > 

                            <div className={classes.Name}>
                                
                                <a href={`/${this.props.name}`}>
                                    {this.props.name}
                                </a>
                                
                            </div> 

                            <div  className={classes.NickName}>
                                <a href={`/${this.props.name}`}>
                                    @{this.props.name} ·
                                </a> 
                            
                            </div>

                            <div  className={classes.Time}>
                                <a href="/home">
                                    {this.getDateDiff(this.props.publish_date)}
                                </a>
                            
                            </div>

                        </div>

                        <div className={classes.Text} > 
                        
                            {this.props.text}

                        </div>

                        <div className={classes.BottomIcons} > 

                            {/* <button className={[classes.IconButton, classes.CommentButton].join(' ')}>
                            
                                <CommentIcon fontSize="small" className={classes.Icon} />
                                <span className={classes.Counter}> 682 </span>

                            </button>

                            <button className={[classes.IconButton, classes.RetweetButton].join(' ')}>

                                <RetweetIcon className={classes.Icon} />
                                <span className={classes.Counter}> 682 </span>

                            </button> */}

                            <button onClick={this.LikeHandler} className={[classes.IconButton, classes.LikeButton, this.props.tweet.who_liked.includes(this.props.user_id) ? classes.Liked : null].join(' ')}>

                                {this.props.tweet.who_liked.includes(this.props.user_id) ? 
                                    <LikeIconFill className={[classes.Icon, classes.Liked ].join(' ')} />
                                    : 
                                    <LikeIcon className={[classes.Icon ].join(' ')} /> 

                                }
                                <span className={classes.Counter}> {this.props.likes} </span>

                            </button>

                            {/* <button className={[classes.IconButton, classes.TmpButton].join(' ')}>
                                <TmpIcon className={classes.Icon} />
                                
                            </button> */}
                            
                        </div>

                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.user._id
    }
}

export default connect(mapStateToProps)(Tweet)