import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import {App} from './App';
import {Home} from './Components/Home';

ReactDOM.render(
<Router>
    <App>
        <Switch>
            <Route exact path = '/' component = {Home} />
        </Switch>
    </App>
</Router>, 
document.getElementById('root'));


