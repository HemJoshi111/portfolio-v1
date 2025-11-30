import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import usePageTitle from './hooks/usePageTitle';

function App() {
  usePageTitle();

  useEffect(() => {
    const hostname = window.location.hostname;

    // If the user is on the ".pages.dev" domain
    if (hostname.includes('pages.dev')) {
      // Force them to your main domain, preserving the path (e.g., /projects)
      window.location.replace(`https://hemjoshi.com.np${window.location.pathname}`);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content Area - flex-grow ensures footer stays at bottom */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;