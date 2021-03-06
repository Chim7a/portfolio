import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/View/About/About';
import Contact from './components/View/Contact/Contact';
import Footer from './components/View/Footer/Footer';
import Navigation from './components/View/Navigation/Navigation';
import Project from './components/View/Projects/Project';
import Skills from './components/View/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Navigation />
        <About />
        <Project />
        <Skills />
        <Contact />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
