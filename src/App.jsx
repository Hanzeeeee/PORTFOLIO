import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
