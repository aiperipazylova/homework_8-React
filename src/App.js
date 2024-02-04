import React, { useState } from 'react';

export default function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('lightblue');

  const changeColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '20px', textAlign: 'center' }}>
      <h1>Цветовой Коктейль</h1>
      <p>Текущий цвет фона: {backgroundColor}</p>
      <button onClick={changeColor}>Изменить цвет</button>
    </div>
  );
};