import React from 'react';

import Modal from 'components/Modal';
import ResidentialDataForm from 'components/ProfileForm/ResidentialDataForm';

const ResidentialDataFormModal = ({
  isOpen,
  onClose,
  onNextStep,
  onPrevStep,
  userProfile,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <ResidentialDataForm
      userProfile={userProfile}
      onNextStep={onNextStep}
      onPrevStep={onPrevStep}
    />
  </Modal>
);

export default ResidentialDataFormModal;
