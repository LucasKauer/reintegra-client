import React from 'react';

import Modal from 'components/Modal';
import PersonalDataForm from 'components/ProfileForm/PersonalDataForm';

const PersonalDataFormModal = ({
  isOpen,
  onClose,
  onNextStep,
  userInfo,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <PersonalDataForm
      userInfo={userInfo}
      onNextStep={onNextStep}
    />
  </Modal>
);

export default PersonalDataFormModal;
