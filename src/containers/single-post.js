/* libs */
import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

/* redux */
import store from '../redux/store'
import {currentPostAction} from '../redux/actions'
import postReducer from '../redux/reducers/postReducer'


class SinglePost extends Component {
    componentDidMount(){
        this.fetchPost()
        window.scrollTo(0, 0);
    }

    fetchPost(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postid}`)
          .then(function (response) {
              store.dispatch( currentPostAction(response.data) )
          })
    }

    render() {
        return (
            <div>
                <h2>{ this.props.currentPost.title }</h2>
                <p>{ this.props.currentPost.body }</p>
            </div>
        );
    }

}


function mapStateToProps(state){
    return {
        currentPost: state.posts.currentPost
    }
}

function mapDispatchToProps(dispatch){
    return {postReducer}
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
