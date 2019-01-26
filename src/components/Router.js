import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App'
import Recipe from './Recipe'


const  Router = ()=>(
<BrowserRouter>
<Route exact path="/" compnent={App}/>
<Route path="/recipe" component={Recipe}/>
</BrowserRouter>
);

export default App
    
