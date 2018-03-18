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

        // needed for mobile devices
        window.scrollTo(0, 0);
    }

    fetchPost(){
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postid}`)
        //   .then(function (response) {
        //       store.dispatch( currentPostAction(response.data) )
        //   })

        axios.get(`https://raw.githubusercontent.com/A-Maged/sleepcoding-blog/gh-pages/posts/${this.props.postSlug}.html`)
        // axios.get(`/posts/${this.props.postSlug}.html`)
          .then(function (response) {
              store.dispatch( currentPostAction(response.data) )
          })

    }

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.currentPost}} />
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
