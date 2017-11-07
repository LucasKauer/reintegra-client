import React from 'react';

import cn from 'utils/cn';

import './image.css';

const Image = ({
  className,
  style,
  fileName,
  size,
  width,
  height,
}) => {
  return (
    <figure
      className={cn(
        'image',
        fileName,
        className,
      )}
      style={{
        height: height || size,
        width: width || size,
        style,
      }}
    />
  );
};

export default Image;
