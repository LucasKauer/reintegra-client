import React from 'react';

import cn from 'utils/cn';

import './input.css';

const Input = ({
  placeholder,
  value,
  type,
  name,
  minlength,
  maxlength,
  required,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      minLength={minlength}
      maxLength={maxlength}
      required={required}
      onChange={onChange}
      className={cn(
        'input',
      )}
      />
  )
};

export default Input;
