/* libs */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import shortid from 'shortid'

/* redux */
import {allPostsAction} from '../redux/actions'
import postReducer from '../redux/reducers/postReducer'
import store from '../redux/store'

/* components */
import WideCard from '../components/wide-card';


class ListPosts extends Component {

    componentDidMount(){
        this.fetchPosts()
    }

    fetchPosts(){
        // axios.get('https://jsonplaceholder.typicode.com/posts/')
        // .then(function (response) {
        //     store.dispatch( allPostsAction(response.data) )
        // })

        axios.get('https://raw.githubusercontent.com/A-Maged/sleepcoding-blog/gh-pages/posts/index.json')
        // axios.get('/posts/index.json')
        .then(function (response) {
            store.dispatch( allPostsAction(response.data) )
        })

    }

    render() {
        return (
            <section className="posts-preview">

                { this.props.allPosts.map((post)=>{
                    return(
                        <WideCard   key={shortid.generate()}
                                    imgUrl={post.imgUrl}
                                    title={post.title}
                                    slug={post.slug}
                                    excerpt={post.excerpt}
                        />
                    )
                }) }

            </section>
        );
    }
}


function mapStateToProps(state){
    return {
        allPosts: state.posts.allPosts
    }
}

function mapDispatchToProps(dispatch){
    return {postReducer}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
