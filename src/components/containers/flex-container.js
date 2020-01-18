import React from 'react';
import './flex-container.css';

export default function FlexContainer({children, className="", ...props}) {
  return <div className={`flex-container ${className}`} {...props}>{children}</div>;
}