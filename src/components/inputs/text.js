import React from 'react'
import Input from './input';

export default function TextInput({id, value, onChange, placeholder, required}) {
  return <Input type="text" id={id} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
}