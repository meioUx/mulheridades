import React from 'react';
import './App.css'; // Certifique-se de ter o arquivo App.css na mesma pasta

function App() {
  return (
    <div className="App">
      <div className="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div className="noise"></div>
    </div>
  );
}

export default App;
