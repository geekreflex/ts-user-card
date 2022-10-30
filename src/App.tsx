import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
