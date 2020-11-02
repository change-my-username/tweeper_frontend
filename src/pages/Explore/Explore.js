import React from 'react';
 
import classes from './Explore.css' 

import Nav from '../../components/Home/Navigation/Nav'
import Search from '../../components/Home/Search/Search'
import Other from '../../components/Home/Other/Other'
import Users from '../../components/Explore/Users/Users'
 
const Explore = (props) => { 

    return (
       <section className={classes.Grid}> 
           
            <Nav />

            <Search />

            <Users /> 

            <Other/> 
           
       </section>
    )
}
 
export default Explore