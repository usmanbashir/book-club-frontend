import './App.css';
import { useState } from 'react';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <div>
      <h1>Hello readers</h1>

      <SignUp />
      <LogIn />
    </div>
  );
}

export default App;
