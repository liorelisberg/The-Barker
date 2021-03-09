import React, { Component ,s} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    image: null
  }

  handleChange = e => {

    if (e.target.id !== "image")
      this.setState({
        [e.target.id]: e.target.value
      })
    else {
      if (e.target.files && e.target.files[0] && e.target.files[0].size <= 5242880) {
        let img = e.target.files[0];
        this.setState({
          image: URL.createObjectURL(img)
        });
      }
    }
  }
  handleSubmit = (e) => {
    // console.log("state", this.state);
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <i className="material-icons prefix">email</i>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <i className="material-icons prefix">mode_edit</i>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <i className="material-icons prefix">person</i>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <i className="material-icons prefix">person_outline</i>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <i className="material-icons prefix">image</i>
            <input type="file" id="image" name="image" accept="image/*" onChange={this.handleChange} />
            <img src={this.state.image} alt="hello"/>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>

          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
