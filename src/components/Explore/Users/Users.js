import React, { useEffect } from 'react';
 
import classes from './Users.css' 

import { getUsers } from '../../../state/ducks/users/actions'

import { connect } from 'react-redux'

import { isEmpty } from 'lodash'

import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';

const Users = (props) => { 

    useEffect(() => {
       props.dispatch(getUsers())

    }, [])

    const displayUsers = (users, user_to_find) => {
      
        if(!user_to_find){
            return users.map((user) => {
                return (
                    <li key={user.name} className={classes.User} > 
                        <Link to={"/" + user.name} className={classes.UserLink} >
                            <Avatar alt="Аватар" src={user.avatar}/>

                            <span className={classes.UserName} > {user.name}  </span>
                        </Link>
                    </li>
                )
            })
        }

        const searchPattern = new RegExp(user_to_find, 'gi')

        return users.map((user) => {

            // indecies = [3, 9]
            let indecies = [...user.name.matchAll(searchPattern)].map(el => el.index)

            if(isEmpty(indecies))
                return null

            // user_to_find.length = 3
            // indecies = [3, 4, 5, 9, 10, 11] 
            indecies = indecies.map((index_item) => {

                const tmp = []
                for (let i = 0; i < user_to_find.length; i++) {
                    tmp.push(index_item + i)
                }

                return tmp
            }).flat()
           

            return (
                
                <li key={user.name} className={classes.User} > 
                    <Link to={"/" + user.name} className={classes.UserLink}>
                        <Avatar alt="Аватар" src={user.avatar}/>
                        
                        <span  className={classes.UserName}> 
                            {user.name.split('').map((letter, index) => {
                                if(indecies.includes(index)){
                                    return  (<span key={`${letter} + ${index}`} className={classes.Highlight}>{letter}</span>)       
                                }
                                return letter
                            
                            })} 
                        </span>
                    </Link>   
                </li>
            )
        })

    }

    return (
        <ul className={classes.UserList}> 
            {displayUsers(props.users, props.user_to_find)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        user_to_find: state.users.user_to_find,
        users: state.users.users,
    }
}
 
export default connect( mapStateToProps )(Users)