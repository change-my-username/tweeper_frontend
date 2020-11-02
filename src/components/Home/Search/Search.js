import React, { useEffect } from 'react';

import classes from './Search.css'

import SearchIcon from '@material-ui/icons/SearchOutlined';

import { connect } from 'react-redux'

import { searchUser } from '../../../state/ducks/users/actions'

const Search = (props) => { 

    const inputHandler = (e) => {
        props.dispatch(searchUser(e.target.value))
    }

    useEffect(() => {
        return () => {
            props.dispatch(searchUser(""))
        }
    }, [])

    return (
        <div className={classes.Search}> 
            <div className={classes.Wrapper}>
                <SearchIcon fontSize="small" />
                <input onChange={inputHandler} className={classes.Input} placeholder="Поиск в Твиттере" />
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(Search)