import React from 'react';
import moment from 'moment';

function Post({ post }) {
  const formatDateTime = (dateTime) => {
    if (!dateTime) {
      return '';
    }
    const date = dateTime.toDate(); // Convert Firestore Timestamp to JavaScript Date object
    return moment(date).format('MMM DD, YYYY');
  };
  return (
    <div className="mt-3">
      <span className="post-author">{post.author}</span>
      <span className="post-time"> {formatDateTime(post.createdAt)}</span>
      <br />
      <hr className="post-hr" />
      <span className="post-content">{post.content}</span>
    </div>
  );
}

export default Post;
