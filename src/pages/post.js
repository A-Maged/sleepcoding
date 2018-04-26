import React from 'react'

/* components */
import Header from '../components/header';
import Logo from '../components/logo';
import Footer from '../components/footer';
import SinglePost from '../containers/single-post'

const Post = (props) => {
    return (
        <div>
            <Header />
            <Logo />

            <div className="container single-post">
                <SinglePost postSlug={props.match.params.slug} />
            </div>

            <Footer />
        </div>
    );
}

export default Post;
