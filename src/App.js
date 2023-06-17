// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NavBar from './component/MenuBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
