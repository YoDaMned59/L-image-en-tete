import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ServicePage from './pages/ServicePage'
import CGV from './pages/CGV'
import MentionsLegales from './pages/MentionsLegales'
import { normalizePath } from './utils/pathUtils'
import './styles/App.scss'

function App() {
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Routage simple basé sur l'URL
  const getCurrentPage = () => {
    const path = currentPath;
    
    // Pages principales
    if (path === '/about' || path === '/about/') {
      return <About />;
    }
    if (path === '/contact' || path === '/contact/') {
      return <Contact />;
    }
    
    // Pages légales
    if (path === '/cgv' || path === '/cgv/') {
      return <CGV />;
    }
    if (path === '/mentions-legales' || path === '/mentions-legales/') {
      return <MentionsLegales />;
    }
    
    // Pages de services
    if (path.startsWith('/services/')) {
      const serviceId = path.split('/services/')[1]?.replace(/\/$/, '');
      return <ServicePage serviceId={serviceId} />;
    }
    
    // Page d'accueil par défaut
    return <Home />;
  };

  return (
    <div className="app">
      <Header />
      <main>
        {getCurrentPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
