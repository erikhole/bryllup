import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import Comment from './comment';

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(comments);
      });

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const handleDeleteComment = async (commentId) => {
    try {
      await firestore
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .doc(commentId)
        .delete();
      console.log('Comment deleted successfully');
    } catch (error) {
      console.error('Error deleting comment', error);
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={postId} onDelete={handleDeleteComment} />
      ))}
    </div>
  );
}

export default CommentList;
