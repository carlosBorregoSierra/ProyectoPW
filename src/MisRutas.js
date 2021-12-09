import React from "react";
import { Route, Switch} from "react-router-dom";
import Admin from './pages/Admin';
import Shop from "./pages/Shop";
import Cart from './pages/Cart';
import { NotFound } from "./pages/NotFound";

export default function MisRoutes(){
    return(
        <Switch>
            <Route exact path='/Admin' component={Admin}/>
            <Route exact path='/' component={Shop}/>
            <Route exact path='/Cart' component={Cart}/>
            <Route path="*" component={ NotFound} />
        </Switch>
    );
}