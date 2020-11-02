import React from 'react';

import classes from './Home.css'

import Nav from '../../components/Home/Navigation/Nav'
import Header from '../../components/Home/Header/Header'
import Search from '../../components/Home/Search/Search'
import TweetForm from '../../components/Home/TweetForm/TweetForm'
import Feed from '../../components/Home/Feed/Feed'
import Other from '../../components/Home/Other/Other'

import { getUser } from '../../state/ducks/user/actions'
import { connect } from 'react-redux'

class Home extends React.Component { 

    componentDidMount() {
        this.props.dispatch(getUser())
    }

    render () {
        return (
            <section className={classes.Grid}> 
                
                    <Nav />

                    <Header />

                    {/* <Search /> */}

                    <Other/>  
                    
                    <TweetForm />

                    <Feed />

                
            </section>
            )
    }
}
 
export default connect()(Home)