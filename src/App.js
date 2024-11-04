import React from 'react';
import './App.css';
import LBRTForm from './LBRTform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wprowadź wyniki pomiarów!</h1>
      </header>
      <main>
        <LBRTForm />
      </main>
    </div>
  );
}

export default App;