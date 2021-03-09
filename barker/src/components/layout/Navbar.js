import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const refreshPage = () => {
  if (window.location.pathname === "/")
    window.location.reload();
}

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <div className="navbar" id="myNavBar">
      <nav className="grey darken-3">
        <Link to='/' className="left brand-logo delay" onClick={refreshPage}>The Barker</Link>
        <div className="navbar" id="myNavBar">
          <Link to="#" className="icon right" onClick={hamburger}>
            <i className="fa fa-bars"></i></Link>
          <ul className="nav-menu right">
            {links}
          </ul>
        </div>
      </nav>
    </div>
  )
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburger() {
  var x = document.getElementById("myNavBar");
  // console.log(x.className);
  if (x.className === "navbar responsive") {
    x.className = "navbar"
  } else {
    x.className = "navbar responsive";
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar)