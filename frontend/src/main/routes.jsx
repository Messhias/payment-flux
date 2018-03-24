import React from 'react';
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle}></Route>
        </Route>
        <Redirect from="*" to='/' />
    </Router>
);
