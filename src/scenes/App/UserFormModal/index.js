import React from 'react';

import Modal from 'components/Modal';
import UserForm from 'components/UserForm';

const UserFormModal = ({
  authError,
  isOpen,
  onClose,
  onCreateAccount,
  onLogin,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <UserForm
      error={authError}
      onLogin={onLogin}
      onCreateAccount={onCreateAccount}
    />
  </Modal>
);

export default UserFormModal;
