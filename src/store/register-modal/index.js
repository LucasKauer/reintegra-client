import { handleActions } from 'redux-actions';
import { setRegisterModalState } from './actions';

const initialState = {
  registerSteps: 0,
};

const reducer = handleActions({
  [setRegisterModalState]: (state, action) => ({
    ...state,
    registerSteps: action.payload,
  }),
}, initialState);

export const getRegisterModalState = state => state.register.registerSteps;

export default reducer;
