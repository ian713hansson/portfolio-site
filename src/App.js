import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Header from './components/Header';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Landing from './pages/Landing';

function App() {

  return (
    <div className="App">
      <Header />
      
      <main>
        <Routes>
          <Route path='/portfolio-site' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
