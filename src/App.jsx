import React from 'react'
import Acceuil from './pages/Acceuil'
import BilanSuivi from './pages/BilanSuivi'
import AtelierCollectif from './pages/AtelierCollectif'
import SoinReiki from './pages/SoinReiki'
import './styles/App.scss'

function App() {
  // Routage simple basé sur l'URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    
    switch (path) {
      case '/bilan':
        return <BilanSuivi />;
      case '/atelier':
        return <AtelierCollectif />;
      case '/reiki':
        return <SoinReiki />;
      default:
        return <Acceuil />;
    }
  };

  return (
    <div className="app">
      {getCurrentPage()}
    </div>
  )
}

export default App
