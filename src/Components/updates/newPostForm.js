// NewPostForm.js

import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { firestore, timestamp, auth } from '../../firebase';
import { toast } from 'react-toastify';

function NewPostForm() {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      toast.error('Please sign in to post.'); // Show an error toast
      return;
    }

    await firestore.collection('posts').add({
      content,
      author,
      createdAt: timestamp(),
    });

    setContent('');
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
      <div className="row">
        <Form.Group className="mt-3">
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Navn"
            disabled
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Hva har du på hjertet?"
          />
        </Form.Group>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"></div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"></div>{' '}
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <Button className="mt-3" variant="primary" type="submit">
            Post
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default NewPostForm;
