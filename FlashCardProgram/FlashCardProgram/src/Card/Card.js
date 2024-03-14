import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="english">{props.english}</div>
            </div>
            <div className="back">
                <div className="foreign">{props.foreign}</div>
            </div>
        </div>
    </div>
)

export default Card; 