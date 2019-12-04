import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './containers/Login/Login.js';


export default function Routes(){
    return (
        <Switch>
            <Route path='/' exact component={Login}/>
        </Switch>
    );
}

