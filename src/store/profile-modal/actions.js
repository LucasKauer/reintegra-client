import { createAction } from 'redux-actions';

const setProfileModalState = createAction('SET_PROFILE_MODAL_STATE');

const openProfileModal = () => setStatus(1);

const closeProfileModal = () => setStatus(0);

const setStatus = (profileSteps) => dispatch => {
  dispatch(setProfileModalState(profileSteps));
};

export {
  setProfileModalState,
  openProfileModal,
  closeProfileModal,
};
