import React from 'react';

import classes from './Nav.css'; 

import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';

import ExitButton from '../../utils/signButton'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { isEmpty } from 'lodash'

                 
const Nav = (props) => { 


    const navItems = [  {
        name: "Главная",
        icon: <HomeIcon fontSize="large" />,
        path: "home"
        },
        {
            name: "Поиск",
            icon: <SearchIcon fontSize="large" />,
            path: "explore"
        },
        // {
        //     name: "Уведомления",
        //     icon: <NotificationsIcon fontSize="large" />,
        //     path: "notifications"
        // }, 
        // {
        //     name: "Сообщения",
        //     icon: <MailIcon fontSize="large" />,
        //     path: "messages"
        // }, 
        // {
        //     name: "Закладки",
        //     icon: <BookmarkIcon fontSize="large" />,
        //     path: "bookmarks"
        // }, 
        {
            name: "Профиль",
            icon: <PersonIcon fontSize="large" />,
            path:  `${ isEmpty(props.user) ? 'home' : props.user.name}`
        }, 
    ]
    .map((item) => (
        <li key={item.name} className={classes.NavItem}>
            { item.name === "Профиль" ?
                <a href={`/${item.path}`} className={classes.NavBtn}>
                    {item.icon}
                    <div className={classes.NavTitle}> {item.name} </div>
                </a> 
                :
                <Link to={`/${item.path}`} className={classes.NavBtn}>
                    {item.icon}
                    <div className={classes.NavTitle}> {item.name} </div>
                </Link>
            }
        </li>
        )         
    )


    
    const exitHandler = () => {
        localStorage.removeItem("token")
    }

    return (

        // <div className={classes.Kek}>
            <nav className={classes.Navigation}>


                <ul className={classes.NavList}>

                    <li key={"tweet_icon"} className={[classes.NavItem, classes.LogoItem].join(' ')}>
                        <button className={classes.NavBtn}>
                            <TwitterIcon fontSize="large" style={{color: "var(--primaryColor)"}}/>
                        </button>
                    </li>

                    {navItems}

                    <li key={"tweet_button"} className={[classes.NavItem, classes.TweetItem].join(' ')}>
                        <ExitButton className={classes.ExitBtn} onClick={exitHandler} ><a href="/"> Выход </a></ExitButton>
                    </li>
                </ul>
            
        </nav>
    // </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
 
export default connect(mapStateToProps)(Nav)