import { createAction } from 'redux-actions';

const setProfileModalState = createAction('SET_PROFILE_MODAL_STATE');

const openProfileModal = () => setStatus({ profileSteps: 1, userProfile: { }});

const closeProfileModal = () => setStatus({ profileSteps: 0, userProfile: { }});

const nextStepProfileModal = ({ profileSteps, userProfile }, newDataToUserProfile) => setStatus({ profileSteps: profileSteps + 1, userProfile: Object.assign(userProfile, newDataToUserProfile) });
const prevStepProfileModal = ({ profileSteps, userProfile }, newDataToUserProfile) => setStatus({ profileSteps: profileSteps - 1, userProfile: Object.assign(userProfile, newDataToUserProfile) });

const setStatus = profile => dispatch => {
  dispatch(setProfileModalState(profile));
};

export {
  setProfileModalState,
  openProfileModal,
  closeProfileModal,
  nextStepProfileModal,
  prevStepProfileModal,
};
