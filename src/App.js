import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from './Components/Homepage';
import NavBar from './Components/Navbar';
import Gavelister from './Components/Gavelister';
import MapLocations from './Components/Map';
import PostList from './Components/updates/postList';
import PostPage from './Components/updates/postPage';
import Informasjon from './Components/Informasjon';

function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <NavBar />
      <Container className="content-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gavelister" element={<Gavelister />} />
          <Route path="/kart" element={<MapLocations />} />
          <Route exact path="/oppdateringer" element={<PostList />} />
          <Route path="/informasjon" element={<Informasjon />} />

          <Route path="/oppdateringer/:id" element={<PostPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
