import { createAction } from 'redux-actions';

const setRegisterModalState = createAction('SET_REGISTER_MODAL_STATE');

const openModal = () => setState(1);

const closeModal = () => setState(0);

const setState = (registerSteps) => dispatch => {
  dispatch(setRegisterModalState(registerSteps));
};

export {
  setRegisterModalState,
  openModal,
  closeModal,
};
