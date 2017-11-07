import React from 'react';

import Modal from 'components/Modal';
import ContactDataForm from 'components/ProfileForm/ContactDataForm';

const ContactDataFormModal = ({
  isOpen,
  onClose,
  onPrevStep,
  onSaveProfile,
  userProfile,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <ContactDataForm
      userProfile={userProfile}
      onPrevStep={onPrevStep}
      onSaveProfile={onSaveProfile}
    />
  </Modal>
);

export default ContactDataFormModal;
