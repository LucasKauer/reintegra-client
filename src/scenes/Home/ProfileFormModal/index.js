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
  onSaveUserInfo,
  userInfo,
}) => (
  <Panel>
    <PersonalDataFormModal
      isOpen={isOpenPersonalDataForm}
      onClose={onClose}
      onNextStep={onNextStep}
      userInfo={userInfo}
    />
    <ResidentialDataFormModal
      isOpen={isOpenResidentialDataForm}
      onClose={onClose}
      onNextStep={onNextStep}
      onPrevStep={onPrevStep}
      userInfo={userInfo}
    />
    <ContactDataFormModal
      isOpen={isOpenContactDataForm}
      onClose={onClose}
      onPrevStep={onPrevStep}
      onSaveUserInfo={onSaveUserInfo}
      userInfo={userInfo}
    />
  </Panel>
);

export default ProfileFormModal;
