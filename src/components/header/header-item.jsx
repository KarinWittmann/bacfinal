import React from 'react';
import './header-item.css';

export default function NavbarLink({children, ...props}) {
  return (<div className="header-item" {...props}>{children}</div>);
}