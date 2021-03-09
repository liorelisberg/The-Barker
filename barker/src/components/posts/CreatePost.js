import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
import { Redirect } from 'react-router-dom'

class CreatePost extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="create-post">
        <div className="message container white">
          <div className="content center">
            <div className="grey-text text-darken-3">
              <h4>Keep your friends updated!</h4>
              <h6>WOOF WOOF... What's on your mind?</h6>
            </div>
          </div>
        </div>
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="message grey-text text-darken-3">Create a New Bark</h5>
            <div className="input-field">
              <i className="material-icons prefix">wb_incandescent</i>
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">Post Title</label>
            </div>
            <div className="input-field col3 s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <label htmlFor="content">Post Content</label>
            </div>
            <div className="input-field ">
              <button className="btn pink lighten-1">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)