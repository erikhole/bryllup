import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import SignIn from './auth/signInWithEmail';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        console.log(user.displayName);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const generateDisplayName = (email) => {
    const username = email.split('@')[0]; // Extract the username portion of the email

    // Remove unwanted characters or patterns
    const cleanedUsername = username.replace(/[^\w\s.-]/gi, '');

    // Handle empty or invalid usernames
    if (!cleanedUsername) {
      return 'Anonymous';
    }

    // Capitalize the first letter of each word
    const formattedUsername = cleanedUsername
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedUsername;
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Navbar expand="lg" className="navbar-color">
      <Container>
        <Navbar.Brand as={Link} to="/">
          E & S
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/kart">
              Kart
            </Nav.Link>
            <Nav.Link as={Link} to="/gavelister">
              Gaveliste
            </Nav.Link>
            <Nav.Link as={Link} to="/oppdateringer">
              Oppdateringer
            </Nav.Link>
            <Nav.Link as={Link} to="/informasjon">
              Praktisk informasjon
            </Nav.Link>
          </Nav>
          {user ? (
            <button
              className="logout-btn"
              onClick={() => auth.signOut()}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              {isHovered ? (
                <span className="user-indicator">
                  Log out from {user.displayName}
                </span>
              ) : (
                <span className="user-indicator">
                  Logged in as:{' '}
                  {user.displayName || generateDisplayName(user.email)}
                </span>
              )}
            </button>
          ) : (
            <SignIn />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
