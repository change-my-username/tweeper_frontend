import React, {useEffect} from 'react';
 
import classes from './Profile.css' 

import Nav from '../../components/Home/Navigation/Nav'
import Search from '../../components/Home/Search/Search'
import Feed from '../../components/Home/Feed/Feed'
import Other from '../../components/Home/Other/Other'
import About from '../../components/Profile/About'

import { connect } from 'react-redux'

import { getUser } from '../../state/ducks/user/actions'
import { getCurrentUser }  from '../../state/ducks/current_user/actions'
import { clearCurrentUser }  from '../../state/ducks/current_user/actions'
import { useParams } from 'react-router-dom';

 
const Profile = (props) => { 

    const {current_user} = useParams()

    useEffect(() => {
        props.dispatch(getUser())

        props.dispatch(getCurrentUser(current_user))
        return () => {
            props.dispatch(clearCurrentUser())
        }
    }, [])

    return (
        <section className={classes.Grid}> 

            <Nav/>
            
            {/* <Search/> */}

            <Feed/>

            <About />

            <Other/>

        </section>
    )
}
 
export default connect()(Profile);