import React from 'react';
import './inputs.css';

const Input = ({onChange, className="", ...props}) => <input className={`input ${className}`} onChange={event => onChange(event.target.value)} {...props} />
export const TextInput = props => <Input type="text" {...props} />;
export const PasswordInput = props => <Input type="password" {...props} />;
export const FileInput = ({file, onChange, className="", ...props}) => (
  <div>
    <label htmlFor="file-upload" className={`input input_file_label ${file && "input_file_label--active"} ${className}`}>
        {file ? file.name : "Choose a file..."}
    </label>
    <input id="file-upload" type="file" className={"input_file"} onChange={event => onChange(event.target.files[0])} {...props} />
  </div>
);
  