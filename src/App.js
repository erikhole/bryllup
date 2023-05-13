import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Components/Homepage';
import NavBar from './Components/Navbar';
import Gavelister from './Components/Gavelister';
import MapLocations from './Components/Map';

function App() {
  return (
    <Router>
      <NavBar />
      <Container className='App'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/gavelister' element={<Gavelister />} />
          <Route path='/kart' element={<MapLocations />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
