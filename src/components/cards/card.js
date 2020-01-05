import React from 'react';
import './card.css';

export default function Card({children, title, customClass }) {
  return (
    <div className={`card ${customClass}`}>
      <div className="card_title">{ title }</div>
      <div className="card_body">{ children }</div>
    </div>
  );
}