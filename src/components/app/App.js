import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage, HomePage} from '../pages';
import './app.css';
import Header from "../header/Header";

const App = () => {

    return (
        <main role='main' className='container'>
            <Header />
            <Switch>
                <Route exact path='/' component ={HomePage}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        </main>
    )
};

export default App
