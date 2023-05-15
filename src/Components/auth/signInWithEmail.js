import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function SignIn() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const signUpWithEmail = (event) => {
  event.preventDefault(); // Prevent form submission
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });

  handleClose();
};

const signInWithEmail = (event) => {
  event.preventDefault(); // Prevent form submission
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });

  handleClose();
};

const signInWithGoogle = (event) => {
  event.preventDefault(); // Prevent form submission
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });

  handleClose();
};


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <button className="btn custom-btn" onClick={(event) => signUpWithEmail(event)}>
  <span className="btn-text">Sign Up with Email</span>
</button>
<button className="btn custom-btn" onClick={(event) => signInWithEmail(event)}>
  <span className="btn-text">Sign In with Email</span>
</button>
<button className="btn custom-btn" onClick={(event) => signInWithGoogle(event)}>
  <span className="btn-text">Sign In with Google</span>
</button>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;
