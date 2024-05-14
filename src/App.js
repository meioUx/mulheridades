import React, { useState, useEffect } from 'react';
import './App.css';
import FloatingImage from './FloatingImage';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      {/* Renderiza a imagem flutuante com as coordenadas do cursor */}
      <FloatingImage x={x} y={y} />

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
