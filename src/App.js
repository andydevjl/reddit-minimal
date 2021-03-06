import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Subreddits from './components/Subreddits/Subreddits';
import './App.css';




function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
