import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="signed-out">
        <li><NavLink className='sign-up' to='/signup'>Signup</NavLink></li>
        <li><NavLink className='sign-in' to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks