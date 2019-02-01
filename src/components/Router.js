import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App'
import Recipe from './Recipe'
import Login from './Login';


const  Router = ()=>(
<BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/recipe/:id" component={Recipe}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup"component={s}
    </Switch>
</BrowserRouter>
);

export default Router
    
