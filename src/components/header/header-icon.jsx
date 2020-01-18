import React, { useState } from 'react'
import './header-icon.css';

export default function HeaderIcon({className="", alt="", src, hoverSrc=src, ...props}) {
  const [source, setSource] = useState(src);

  return (
    <div className="header-icon">
      <img 
        className={`header-icon_icon ${className}`} 
        src={source} 
        alt={alt} 
        onMouseEnter={() => setSource(hoverSrc)}
        onMouseLeave={() => setSource(src)}
        {...props} 
      />
    </div>
  );
}