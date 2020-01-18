import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';

export const Button = ({label, className, ...props}) => <button className={`button ${className}`} {...props} >{label}</button>;
export const SubmitButton = ({label="Save", id="submit", ...props}) => <Button type="submit" id={id} label={label} {...props} />;
export const LinkButton = ({to, ...props}) => <Link to={to}><Button {...props} /></Link>;
