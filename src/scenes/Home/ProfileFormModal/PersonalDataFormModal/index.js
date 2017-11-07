import React from 'react';

import Modal from 'components/Modal';
import PersonalDataForm from 'components/ProfileForm/PersonalDataForm';

const PersonalDataFormModal = ({
  isOpen,
  onClose,
  onNextStep,
  userProfile,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <PersonalDataForm
      userProfile={userProfile}
      onNextStep={onNextStep}
    />
  </Modal>
);

export default PersonalDataFormModal;
