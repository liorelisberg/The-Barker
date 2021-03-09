import React, { Component } from 'react'
import PostList from '../posts/PostList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link, Redirect } from 'react-router-dom'

class Dashboard extends Component {
  state = {
    multiplyer: 5,
    notifCounter: 1,
    postsCounter: 1,
  }

  handleClick = (e) => {
    e.target.id === 'notifCounter' ?
      this.setState({
        ...this.state,
        notifCounter: this.state.notifCounter + 1
      }) :
      this.setState({
        ...this.state,
        postsCounter: this.state.postsCounter + 1
      });
  };

  render() {
    const { posts, auth, notifications } = this.props;
    const { multiplyer, notifCounter, postsCounter } = this.state;

    if (!auth.uid) return <Redirect to='/signin' />

    const slicedNotif = notifications ? notifications
      .slice(0, notifCounter * multiplyer) : null;

    const slicedPosts = posts ? posts
      .slice(0, postsCounter * multiplyer) : null;

    if (document.getElementById("notifCounter") && slicedNotif) {
      if (slicedNotif.length === notifications.length)
        document.getElementById("notifCounter").disabled = true;
      else
        document.getElementById("notifCounter").disabled = false;
    }

    if (document.getElementById("postsCounter") && slicedPosts) {
      if (slicedPosts.length === posts.length)
        document.getElementById("postsCounter").disabled = true;
      else
        document.getElementById("postsCounter").disabled = false;
    }

    return (
      <div className="dashboard">
        <div className="row container">
          <div className="right col s12 m5 offset-m1">
            <Notifications notifications={slicedNotif} />
            <button id="notifCounter" className="waves-effect waves-light btn pink lighten-1 col-6" onClick={this.handleClick}
            >show more</button>
          </div>
          <div className="left col s12 m6">
            <PostList posts={slicedPosts} />
            <button id="postsCounter" className="waves-effect waves-light btn pink lighten-1 col-6" onClick={this.handleClick}>show more</button>
          </div>
        </div>
        <div className="fixed-action-btn">
          <Link to='' className="waves-effect waves-light btn-floating btn-small teal">
            <i className="large material-icons">mode_edit</i>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(""state in dashboard,state);
  return {
    ...state,
    posts: state.firestore.ordered.posts,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', orderBy: ['time', 'desc'] }
  ])
)(Dashboard)
