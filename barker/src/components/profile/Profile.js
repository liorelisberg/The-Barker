import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
  state = {};

  render() {
    const { auth, profile } = this.props;
    // console.log(profile, auth);
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="create-post">
        <div className="message container white">
          <div className="content center">
            <div className="grey-text text-darken-3">
              <h4>Profile</h4>
              {/* <span className="btn-large btn-floating pink lighten-1"><h5>{profile.initials}</h5></span> */}
              <img src="/" className="responsive-img circle materialboxed" alt="profile"/>
              <h6>Name : {profile.firstName} {profile.lastName}</h6>
              <h6>Email : {auth.email}</h6>
            </div>
            <button id="" className="waves-effect waves-light btn grey col-6">delete profile</button>
            <button id="" className="waves-effect waves-light btn grey col-6">edit profile</button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps, null)(Profile)