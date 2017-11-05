import React from 'react';

import cn from 'utils/cn';

import Option from './Option';

import './select.css';

const Select = ({
  children,
  value,
  name,
  placeholder,
  required,
  defaultValue,
  onChange
}) => {
  return (
    <select
      value={value}
      name={name}
      required={required}
      onChange={onChange}
      defaultValue={defaultValue || ''}
      className={cn(
        'select',
      )}
    >
      { placeholder && <Option value='' text={placeholder}  disabled /> }
      {children}
    </select>
  )
};

export default Select;
