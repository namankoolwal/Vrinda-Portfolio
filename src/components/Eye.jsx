"use client"
import React, { useState, useEffect } from 'react';

const Eye = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e) => {
            setEyePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    const eyeStyle = {
        position: 'relative',
        width: '120px', // Adjust eye width as needed
        height: '70px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '2px solid black',
        overflow: 'hidden',
    };

    const eyeBallStyle = {
        position: 'absolute',
        width: '30px', // Adjust eyeball width as needed
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'black',
        transform: `translate(${eyePosition.x / 15}px, ${eyePosition.y / 15}px)`, // Adjust translation as needed
    };

    return (
        <>
        <div className='flex gap-10'>

       <div style={eyeStyle}>
            <div className="eye-ball" style={eyeBallStyle}></div>
        </div>

        <div style={eyeStyle}>
            <div className="eye-ball" style={eyeBallStyle}></div>
        </div>
        </div>
        </>
    );
};

export default Eye;
