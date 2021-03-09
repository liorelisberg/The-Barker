import React from 'react'
import moment from 'moment'

let postTitle = post => {
  return post.title.length < 25 ? post.title : post.title.slice(0, 24) + ' ...';
}
const hanldeLike = (e) => {
  console.log(e);
  //get post ID somehow to stick a like to it
  e.preventDefault();
  return false;
}
const hanldeReport = (e) => {
  //get post ID somehow to stick a like to it
  e.preventDefault();
  return false;
}
const hanldeComment = (e) => {
  //get post ID somehow to stick a like to it
  e.preventDefault();
  return false;
}

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 post-summary">
      <div className="card-content grey-text text-darken-3">
        <button className="report waves-effect waves-teal btn-small btn-flat left" onClick={hanldeReport}>report</button>
        <span className="card-title">{postTitle(post)}</span>
        <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
        <button className="like waves-effect waves-teal btn-small btn-flat right" onClick={hanldeLike}>Like</button>
        <button className="comment waves-effect waves-teal btn-small btn-flat right" onClick={hanldeComment}>comment</button>
        <p className="grey-text">
          {moment(post.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}
export default PostSummary

