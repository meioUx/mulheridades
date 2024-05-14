import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './FloatingImage.css';
import fridaImage from './assets/frida.png';

const FloatingImage = ({ initialX, initialY }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [position, setPosition] = useState({ x: initialX, y: initialY });

    const handleImageClick = () => {
        setIsSelected(!isSelected);
    };

    const handleMouseMove = (e) => {
        if (!isSelected) return;
        setPosition({ x: e.clientX - 25, y: e.clientY - 25 });
    };

    // Define a animação com react-spring
    const animationProps = useSpring({
        to: { left: position.x, top: position.y, scale: isSelected ? 1.2 : 1 },
        config: { tension: 300, friction: 10 }
    });

    return (
        <animated.div className={`floating-image ${isSelected ? 'selected' : ''}`} style={animationProps} onClick={handleImageClick} onMouseMove={handleMouseMove}>
            <img src={fridaImage} className="codigo" alt="Imagem Flutuante" />
        </animated.div>
    );
}

export default FloatingImage;
