import React from 'react';
import { Header, Nav, Collection, HotDeal, NewsLetter, Footer } from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Collection />
      <HotDeal />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
