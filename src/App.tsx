import React from 'react';
import logo from './logo.svg';
import './App.css';

let a: string = '1';

interface Props {
  title: string
}

function App({title}: Props) {
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
