/* libs */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

/* redux */
import store from './redux/store';

/* components */
import Header from './components/header';
import Logo from './components/logo';
import Home from './pages/home';
import Post from './pages/post';
import Footer from './components/footer';

import './App.css';


class App extends Component {

    logStateWhenChanged(){
        store.subscribe(() => {
            console.log('---------')
            console.log(store.getState())
            console.log('---------')
        })
    }

    render() {
        return (
            <Router>
                <div className="App">

                    {/* this.logStateWhenChanged() */}

                    <Header />
                    <Logo />

                    <Route exact path="/" component={Home} />
                    <Route path="/post/:id" component={Post} />

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
