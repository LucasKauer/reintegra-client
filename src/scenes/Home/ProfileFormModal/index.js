import React from 'react';

import PersonalDataFormModal from './PersonalDataFormModal';
import ResidentialDataFormModal from './ResidentialDataFormModal';
import ContactDataFormModal from './ContactDataFormModal';

import Panel from 'components/Panel';

const ProfileFormModal = ({
  isOpenContactDataForm,
  isOpenPersonalDataForm,
  isOpenResidentialDataForm,
  onClose,
  onNextStep,
  onPrevStep,
  onSaveProfile,
  userProfile,
}) => (
  <Panel>
    <PersonalDataFormModal
      isOpen={isOpenPersonalDataForm}
      onClose={onClose}
      onNextStep={onNextStep}
      userProfile={userProfile}
    />
    <ResidentialDataFormModal
      isOpen={isOpenResidentialDataForm}
      onClose={onClose}
      onNextStep={onNextStep}
      onPrevStep={onPrevStep}
      userProfile={userProfile}
    />
    <ContactDataFormModal
      isOpen={isOpenContactDataForm}
      onClose={onClose}
      onPrevStep={onPrevStep}
      onSaveProfile={onSaveProfile}
      userProfile={userProfile}
    />
  </Panel>
);

export default ProfileFormModal;
