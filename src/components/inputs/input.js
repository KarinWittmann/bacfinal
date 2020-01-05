import React from 'react'
import styles from './Inputs.module.css'

export default function Input({type, id, value, onChange, placeholder, required}) {
  return required ? (
    <input type={type} id={id} className={styles.Input} placeholder={placeholder} value={value} onChange={event => onChange(event.target.value)} required/>
  ) : (
    <input type={type} id={id} className={styles.Input} placeholder={placeholder} value={value} onChange={event => onChange(event.target.value)} />
  );
}
