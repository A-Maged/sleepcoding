/* libs */
import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom"; // using HashRouter instead of BrowserRouter cause it works fine with github pages

/* redux */
import store from './redux/store';

/* components */
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import Post from './pages/post';


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

                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route path="/about" component={About} />
                    <Route path="/post/:slug" component={Post} />

                </div>
            </Router>
        );
    }
}

export default App;
