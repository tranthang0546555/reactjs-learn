import React, { useState } from 'react';
import './index.scss'

function getRandomColor() {
    const colorList = ['red', 'green', 'blue', 'pink']
    const colorRandom = colorList[Math.floor(Math.random() * 4)]
    return colorRandom
}

function ColorBox(props) {
    const [color, setColor] = useState(() => (
        localStorage.getItem('colorBox') || 'blue'
    ));

    const handleChangeColor = () => {
        const newColor = getRandomColor()
        localStorage.setItem('colorBox', newColor)
        setColor(newColor)
    }

    return (
        <div
            className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleChangeColor}

        >
            {color}
        </div>
    );
}

export default ColorBox;