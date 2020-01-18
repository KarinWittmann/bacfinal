import React from 'react';
import './form.css';

export default function Form({ children, title, onSubmit, className="", ...props}) {
  const submit = event => {
    event.preventDefault();
    onSubmit(event);
  }
  
  return (
    <form className={`form ${className}`} onSubmit={submit} {...props}>
      { title && <h1>{title}</h1>}
      {children}
    </form>
  );
}