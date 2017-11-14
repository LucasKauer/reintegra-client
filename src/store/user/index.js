import { handleActions } from 'redux-actions';
import { setUserInfoState, setUserInfoError } from './actions';

const initialState = {
  userInfo: {},
  error: null,
};

const reducer = handleActions({
  [setUserInfoState]: (state, action) => ({
    ...state,
    userInfo: action.payload,
    error: null,
  }),
  [setUserInfoError]: (state, action) => ({
    ...state,
    userInfo: {},
    error: action.payload,
  }),
}, initialState);

export const getUserInfoState = state => state.user.userInfo;
export const getError = state => state.user.error;

export default reducer;
