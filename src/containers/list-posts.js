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
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(function (response) {
            store.dispatch( allPostsAction(response.data) )
        })
    }

    render() {
        return (
            <div>

                { this.props.allPosts.map((post)=>{
                    return(
                        <WideCard   key={shortid.generate()}
                                    imgUrl="assets/imgs/4.jpg"
                                    title={post.title}
                                    id={post.id}
                                    excerpt="seems as if multiple keys point to the same binding within Laravel's service container. How exactly does this work? Let's once again peel back the curtain, and figure this out Based on our learning from the previous episode, it seems as if multiple keys point to the same binding within Laravel's service container..."
                        />
                    )
                }) }

            </div>
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
