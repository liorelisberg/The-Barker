import React from 'react'
import SocialMedias from './SocialMedias.js'

const Footer = () => {
  return (
    <footer className="page-footer pink lighten-1">
      <h5 className="white-text center">The Barker</h5>

      <p className="grey-text text-lighten-4 center">Follow us on social media for the latest updates!</p>

      <div className="links center">
        <SocialMedias />
      </div>
      
      <div className="center pink lighten-1">
        © 2020 Lior Elisberg
      </div>
    </footer>
  )
}
export default Footer