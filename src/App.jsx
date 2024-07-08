import { useState } from 'react';
import './App.css';
import Navigation from './component/Header/Header';
import Blogs from './component/Blog/Blogs';

function App() {
  return (
    <>
      <Navigation />
      <Blogs></Blogs>
    </>
  );
}

export default App;
