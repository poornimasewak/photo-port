import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import './index.css';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
      <ContactForm></ContactForm>
        <About></About>
      </main>
    </div>
  );
}

export default App;