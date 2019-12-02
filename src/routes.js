import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

//Components 
//import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import SinglePlace from './components/places/single-place';
import Places from './components/places/places';
 
const AppRoutes = ({store}) =>{
    return(
            <Router>
                <Route 
                exact path='/' 
                component={Login}/>
                <Route exact path='/registro' component ={Register}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/places' component={Places}/>
                <Route exact path='/places/single-place' component={SinglePlace}/>
            </Router>    
        
    );
}

export default AppRoutes;
