import React from 'react';

import cn from 'utils/cn';
import media from 'utils/media';

import './modal.css';

const Modal = ({
  isOpen,
  onClick,
  onClose,
  children,
}) => isOpen ? (
  <div
    onClick={onClick}
    className={cn(
      'modal',
      media.lessThan.tabletLandscape() && 'modal--cover'
    )}
  >
    <div
      className={cn(
        'modal__card',
      )}
    >
      {children}
      <span className="modal__x" onClick={onClose} />
    </div>
  </div>
) : null;

export default Modal;
