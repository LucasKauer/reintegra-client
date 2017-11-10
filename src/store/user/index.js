import { handleActions } from 'redux-actions';
import { setUserInfoState } from './actions';

const initialState = {
  userInfo: {},
};

const reducer = handleActions({
  [setUserInfoState]: (state, action) => ({
    ...state,
    userInfo: action.payload,
  }),
}, initialState);

export const getUserInfoState = state => state.user.userInfo;

export default reducer;
