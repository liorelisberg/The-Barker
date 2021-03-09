import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
// import {Badge} from '@material-ui/core'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="signed-in">
        <li><NavLink className='new-post delay' to='/create' onClick={closeHam}>New Post</NavLink></li>
        <li><button className='logout-btn delay' onClick={props.signOut} >Log out</button></li>
        <li><NavLink to='/profile' className="btn btn-floating pink lighten-1" onClick={closeHam}>
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}
const closeHam = () => {
  var x = document.getElementById("myNavBar");
  if (x.className === "navbar responsive") {
    x.className = "navbar"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
