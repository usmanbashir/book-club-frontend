import './App.css';
import { useState } from 'react';
import Home from './components/Home'
import Vip from './components/Vip';

function App() {
  return (
    <div>
      <h1>Hello readers</h1>

      <Home />
      <Vip />
    </div>
  );
}

export default App;
