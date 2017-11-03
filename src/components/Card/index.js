import React from 'react';
import cn from 'utils/cn';

import './card.css';

const Card = ({ children, centered, noPad, className }) => (
  <section className={
    cn(
      'card',
      noPad && 'card--no-pad',
      centered && 'card--centered',
      className,
    )
  }>
    {children}
  </section>
);

export default Card;
