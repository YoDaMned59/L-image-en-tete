import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ServicePage from './pages/ServicePage'
import './styles/App.scss'

function App() {
  // Routage simple basé sur l'URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    
    // Pages principales
    if (path === '/about') {
      return <About />;
    }
    if (path === '/contact') {
      return <Contact />;
    }
    
    // Pages de services
    if (path.startsWith('/services/')) {
      const serviceId = path.split('/services/')[1];
      return <ServicePage serviceId={serviceId} />;
    }
    
    // Page d'accueil par défaut
    return <Home />;
  };

  return (
    <div className="app">
      <Header />
      {getCurrentPage()}
    </div>
  )
}

export default App
