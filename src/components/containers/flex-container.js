import React from 'react';
import './flex-container.css';

export default function FlexContainer({children}) {

  return <div className="flex-container">{children}</div>;
}