import React from 'react'

/* components */
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';
import ListPosts from '../containers/list-posts'

const Blog = () => {
    return (
        <div>
            <Header />
            <Logo />

            <ListPosts />

            <Footer />
        </div>
    );
}

export default Blog;
