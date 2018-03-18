import React from 'react'

import SinglePost from '../containers/single-post'

const Post = (props) => {
    return (
        <div className="container single-post">
            <SinglePost postSlug={props.match.params.slug} />
        </div>
    );
}

export default Post;
