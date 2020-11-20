import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Catalog from './pages/Catalog'
import Admin from './pages/Admin';
import Navbar from './core/components/Navbar';
import ProductDetails from './core/components/ProductDetails';
import Auth from './pages/Auth';
import history from './core/utils/history';
import PrivateRoute from 'core/components/Routes/PrivateRoutes';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Catalog />
            </Route>
            <Route path="/products/:productId">
                <ProductDetails />
            </Route>
            <Redirect from ="/admin/auth" to="/admin/auth/login" exact />
            <Route path="/admin/auth">
                <Auth />
            </Route>
            <Redirect from ="/admin" to="/admin/products" exact/>
            <PrivateRoute path="/admin">
                <Admin />
            </PrivateRoute>

        </Switch>

    </Router>
);

export default Routes;