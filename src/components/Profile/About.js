import React, { useState } from 'react';
 
import classes from './About.css' 

import { connect } from 'react-redux'

import { BsArrowLeftShort as ArrowLeft } from 'react-icons/bs'
import { FaRegCalendarAlt as Calendar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

import FollowButton from '../utils/signButton'
import { Follow, Unfollow } from '../../state/ducks/current_user/actions'

import Modal from './Modal/Modal'

class About extends React.Component { 

    state = {
        // isFollow: false,
        // isEditingProfile: false, 
    }
    
     
    monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];


    // shouldComponentUpdate = (nextProps, nextState) => {
    //     // if(!nextProps.current_user.isLoading && !nextProps.user.isLoading) {
    //     //     if(this.state.isFollow !== nextState.isFollow)
    //     //         return false

    //     //     return true
    //     // }
            
    //     // return false
    // }

    // componentDidUpdate() {
        
       
        
    // }
   
    followHandler = () => {
       
        if(Boolean(this.props.current_user.followers.users.find( user => user.user_id === this.props.user._id))) {
        
                return this.props.dispatch(Unfollow(this.props.current_user))    
        }

        return this.props.dispatch(Follow(this.props.current_user))
       
    }

    // editProfileHandler = () => {
    //     this.setState( (prevState) => this.setState({
    //         isEditingProfile: !prevState.isEditingProfile
    //     }))
    
    // }

    closeEditProfileModal = () => {
        this.setState( (prevState) => this.setState({
            isEditingProfile: !prevState.isEditingProfile
        }))
    }

    showRegistrationDate = (date) => {
        
        const formated_date = new Date(date);
        
        if(date)
            return this.monthNames[ formated_date.getMonth() ] + '  ' + formated_date.getFullYear() + ' г.';
        return ''
    }

    render() 
    {
        return (
        <div className={classes.About}> 
            <div className={classes.BackToHomePanel} > 

                <Link to="/home" className={classes.ToHome}>  
                    <ArrowLeft size="31px"  style={{ fill: "#1CA1F2" }} />
                </Link>

                <div>
                    <div className={classes.UserName}> {this.props.current_user.name} </div>
                    <div className={classes.UserTweets}>{this.props.current_user.feed.tweets.length} твитов</div>
                </div>
            </div>

            <div className={classes.Profile} >  
                <div className={classes.BackgroundImage}> 
                </div>

                <Avatar className={classes.Avatar} src={this.props.current_user.avatar} />

                <div className={classes.UserInfo}> 
               
                    { (this.props.current_user.isLoading || this.props.user.isLoading) ?  <span className={classes.Loading}> Loading... </span> :

                        this.props.user.name === this.props.current_user.name ? 
                        
                            // <FollowButton onClick={this.editProfileHandler} className={classes.FollowBtn}>      
                        
                            //     Edit profile

                            // </FollowButton> 
                            null

                            :

                            <FollowButton onClick={this.followHandler} className={classes.FollowBtn}> 
                                { Boolean(this.props.current_user.followers.users.find( user => user.user_id === this.props.user._id)) ? "Unfollow" : "Follow"}

                            </FollowButton> 

                    }    

                    <div className={classes.Name}>{this.props.current_user.name}</div>
                    <div className={classes.NickName}>@{this.props.current_user.name}</div>
                    <div className={classes.Register}>
                        <Calendar/>
                        <div>
                            Регистрация: {this.showRegistrationDate(this.props.current_user.registration_date)}
                        </div>
                        
                    </div>

                    <div className={classes.FollowInfo}>
                        <div className={classes.Follow}>
                            <span className={classes.FollowCounter}> {this.props.current_user.follows.count} </span>
                            в читаемых
                        </div>
                        <div className={classes.Followers}>
                            <span className={classes.FollowersCounter}> {this.props.current_user.followers.count} </span>
                            читателей
                        </div>
                    </div>

                </div>

                
            </div>

            {/* {this.state.isEditingProfile ? 
                <Modal closeModal={this.closeEditProfileModal} />
                :
                null
            } */}
        </div>
    )
}}

const mapStateToProps = (state) => {
    return {
        current_user: state.current_user,
        user: state.user,
       
    }
}

export default connect(mapStateToProps)(About)