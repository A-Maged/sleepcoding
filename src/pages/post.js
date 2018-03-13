import React from 'react'

import SinglePost from '../containers/single-post'

const Post = (props) => {
    return (
        <div className="container single-post">
            <SinglePost postid={props.match.params.id} />
        </div>
    );
}

export default Post;
