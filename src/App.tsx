import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;