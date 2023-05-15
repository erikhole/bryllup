import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore, auth } from '../../firebase';
import Post from './post';
import CommentList from './commentList';
import NewCommentForm from './newCommentForm';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const currentUser = auth.currentUser;
  console.log(currentUser);

  useEffect(() => {
    const loadPost = async () => {
      const postDoc = await firestore.collection('posts').doc(id).get();

      if (!postDoc.exists) {
        console.log('No such post!');
        return;
      }

      setPost({ id: postDoc.id, ...postDoc.data() });
    };

    loadPost();
  }, [id]);

  const handleDeletePost = async () => {
    try {
      await firestore.collection('posts').doc(id).delete();
      console.log('Post deleted successfully');
      // Redirect or perform any additional actions after deleting the post
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div>
        <Post post={post} onDelete={handleDeletePost} />
      </div>
      <div style={{ flex: 1 }}>
        <h5 className="mt-5">Kommentarer</h5>
        <CommentList postId={id} currentUser={currentUser} />
      </div>
      <div>
        <h5 className="mt-3">Legg til kommentar</h5>
        <NewCommentForm postId={id} />
      </div>
    </div>
  );
}

export default PostPage;
