import React from 'react';

import Modal from 'components/Modal';
import ContactDataForm from 'components/ProfileForm/ContactDataForm';

const ContactDataFormModal = ({
  isOpen,
  onClose,
  onPrevStep,
  onSaveUserInfo,
  userInfo,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <ContactDataForm
      userInfo={userInfo}
      onPrevStep={onPrevStep}
      onSaveUserInfo={onSaveUserInfo}
    />
  </Modal>
);

export default ContactDataFormModal;
