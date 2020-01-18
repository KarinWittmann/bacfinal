import React from 'react';
import './output-error.css'

export default function Output({error, className, ...props}) {
  return error ? <p className={`output-error ${className}`} {...props}>{error}</p> : <div />; 
}