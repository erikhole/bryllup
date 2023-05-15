import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import moment from 'moment';
import { firestore, auth } from '../../firebase';

import trashIcon from '../../icons/trash.svg'; // Import the chat.svg file

function Comment({ comment, postId }) {
  const formatDateTime = (dateTime) => {
    if (!dateTime) {
      return '';
    }
    const date = dateTime.toDate(); // Convert Firestore Timestamp to JavaScript Date object
    return moment(date).format('MMM DD, YYYY');
  };

  

  const handleDeleteComment = async () => {
    try {
      const user = auth.currentUser;
      console.log(comment);
      const confirm = window.
      confirm('Are you sure you want to delete this comment?');

      if (user && user.uid === comment.authorId) {
   
        await firestore
          .collection('posts')
          .doc(postId)
          .collection('comments')
          .doc(comment.id)
          .delete();
        console.log('Comment deleted successfully');
      } else {
        console.log('You are not authorized to delete this comment');
      }
    } catch (error) {
      console.error('Error deleting comment', error);
    }
  };
  
  
  

  const user = auth.currentUser;

  return (
    <Container>
    <div className="row mt-5">
      <hr />
      <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-3"></div>
      <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-6">
        <div className="row post-author">
          {comment.author} - {formatDateTime(comment.createdAt)}
        </div>
        <div className="row">{comment.content}</div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        {user && user.uid === comment.authorId && (
          <div className="delete-button" onClick={handleDeleteComment}>
              <img src={trashIcon} alt="chat" className="icon" width="20px" />{' '}
          </div>
        )}
      </div>
    </div>
  </Container>
  );
}

export default Comment;
