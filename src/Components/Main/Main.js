import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home';
import Detail from "../Cocktails/Detail";
import Ingredients from "../Ingredients/Ingredients";

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/detail/:id' component={Detail}/>
                <Route exact path='/ingredients/:ing' component={Ingredients}/>
                <Route exact path='/ingredients/:ing' component={Ingredients}/>
                <Route exact path='/ingredients/:ing' component={Ingredients}/>
                <Route exact path='/ingredients/:ing' component={Ingredients}/>
            </Switch>
        </>
    );
};

export default Main;