import React, { Component } from 'react'
import ListPosts from '../containers/list-posts'

class Home extends Component {
    render() {
        return (
            <section className="posts-preview">
                <ListPosts />
            </section>
        );
    }
}

export default Home;
