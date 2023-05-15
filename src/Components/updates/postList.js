import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import { Link } from 'react-router-dom';
import Post from './post';
import NewPostForm from './newPostForm';
import chatIcon from '../../icons/chat.svg';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('posts').onSnapshot((snapshot) => {
      const updatedPosts = snapshot.docs.map((doc) => {
        const post = {
          id: doc.id,
          ...doc.data(),
          comments: [], // Initialize comments array
        };

        // Retrieve comments associated with the post
        doc.ref.collection('comments').onSnapshot((commentSnapshot) => {
          const comments = commentSnapshot.docs.map((commentDoc) => ({
            id: commentDoc.id,
            ...commentDoc.data(),
          }));
          post.comments = comments; // Assign comments to the post
        });

        return post;
      });

      setPosts(updatedPosts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="row text-center">
        <h1>Oppdateringer</h1>
        <h5>Her kommer det oppdateringer, og folk kan stille spørsmål</h5>
      </div>
      <div className="row">
        <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-3"></div>
        <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-6">
          <NewPostForm />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"></div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-3"></div>
        <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-6">
          {posts.map((post) => (
            <React.Fragment key={post.id}>
              <Post post={post} />
              <br />
              <Link to={`/oppdateringer/${post.id}`} style={{ textDecoration: 'none' }}>
                <img src={chatIcon} alt="chat" className="icon" width="30px" />
                <span className="comment-count">({post.comments.length})</span>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"></div>
      </div>
    </>
  );
}

export default PostList;
