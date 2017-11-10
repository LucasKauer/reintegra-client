import { createAction } from 'redux-actions';

const setProfileModalState = createAction('SET_PROFILE_MODAL_STATE');

const openProfileModal = () => setState(1);
const closeProfileModal = () => setState(0);

const nextStepProfileModal = ({ profileSteps }) => setState(profileSteps + 1);
const prevStepProfileModal = ({ profileSteps }) => setState(profileSteps - 1);

const setState = profile => dispatch => {
  dispatch(setProfileModalState(profile));
  return Promise.resolve();
};

export {
  setProfileModalState,
  openProfileModal,
  closeProfileModal,
  nextStepProfileModal,
  prevStepProfileModal,
};
