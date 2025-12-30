import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        {/* Add other pages here later */}
      </main>
      <WhatsAppFloatButton />
      <Footer />
    </div>
  );
}

export default App;