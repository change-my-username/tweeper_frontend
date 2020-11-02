import React, { useEffect } from 'react';
import './App.css';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Explore from './pages/Explore/Explore'
import Profile from './pages/Profile/Profile'
import Tmp from './pages/tmp/Tmp';
import PrivateRoute from './components/utils/PrivateRoute'
import RedirectRoute from './components/utils/RedirectRoute'

import { Route, Switch } from 'react-router-dom';

import store from './state/store'
import { Provider } from 'react-redux'

function App(props) {

  return (
    <Provider store={store}>
      <Switch>
        <PrivateRoute exact path="/home" component={Home}/>
        <PrivateRoute exact path="/explore" component={Explore}/>

        {/* <Route exact path="/tmp" component={Tmp}/>  */}

        <PrivateRoute exact path="/:current_user" component={Profile}/>

        <RedirectRoute exact path="/" component={SignIn}/> 

      </Switch>
      
    </Provider>
    
  );
}

export default App;
