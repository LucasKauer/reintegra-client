import React from 'react';

import Modal from 'components/Modal';
import ResidentialDataForm from 'components/ProfileForm/ResidentialDataForm';

const ResidentialDataFormModal = ({
  isOpen,
  onClose,
  onNextStep,
  onPrevStep,
  userInfo,
}) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <ResidentialDataForm
      userInfo={userInfo}
      onNextStep={onNextStep}
      onPrevStep={onPrevStep}
    />
  </Modal>
);

export default ResidentialDataFormModal;
