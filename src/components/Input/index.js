import React from 'react';

import cn from 'utils/cn';

import './input.css';

const Input = ({
  className,
  fit,
  placeholder,
  value,
  type,
  name,
  length,
  minlength,
  maxlength,
  required,
  onChange,
  onBlur,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      minLength={length || minlength}
      maxLength={length || maxlength}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      className={cn(
        'input',
        fit && 'input-fit',
        className,
      )}
    />
  );
};

export default Input;
