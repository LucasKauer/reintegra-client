import { createAction } from 'redux-actions';

const setRegisterModalState = createAction('SET_REGISTER_MODAL_STATE');

const openModal = () => setStatus(1);

const closeModal = () => setStatus(0);

const setStatus = (registerSteps) => dispatch => {
  dispatch(setRegisterModalState(registerSteps));
};

export {
  setRegisterModalState,
  openModal,
  closeModal,
};
