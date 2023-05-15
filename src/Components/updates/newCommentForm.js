import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { firestore, timestamp, auth } from '../../firebase';
import { toast } from 'react-toastify';

function NewCommentForm({ postId }) {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      toast.error('Please sign in to post.'); // Show an error toast
      return;
    }
    if (content.length < 5) {
      toast.error('Comment must be at least 5 characters long.'); // Show an error toast
      return;
    }
    const commentData = {
      content,
      author: user.displayName,
      authorId: user.uid, // Add the user's unique identifier
      createdAt: timestamp(), // Set createdAt field with server timestamp
    };

    try {
      await firestore
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .add(commentData);

      setContent('');
    } catch (error) {
      console.error(error);
      // Handle the error and show an appropriate message to the user
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthor(user.displayName);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mt-3">
        <Form.Control
          disabled
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
        />
      </Form.Group>
      <Button className="mt-3" variant="primary" type="submit">
        Post Comment
      </Button>
    </Form>
  );
}

export default NewCommentForm;
