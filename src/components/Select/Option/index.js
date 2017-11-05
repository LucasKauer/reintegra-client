import React from 'react';

const Option = ({
  value,
  text,
  selected,
  disabled,
}) => {
  return (
    <option value={value} selected={selected} disabled={disabled}>{text}</option>
  )
};

export default Option;
