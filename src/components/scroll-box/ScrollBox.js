import React from 'react';
import './scrollBox.css';

const ScrollBox = (props) => {
    return (
        <div className="scroll-box">
            {props.children}
        </div>
    );
}

export default ScrollBox;
