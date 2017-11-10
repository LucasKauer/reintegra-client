import { handleActions } from 'redux-actions';
import { setProfileModalState } from './actions';

const initialState = {
  profileSteps: 0,
};

const reducer = handleActions({
  [setProfileModalState]: (state, action) => ({
    ...state,
    profileSteps: action.payload,
  }),
}, initialState);

export const getProfileModalState = state => state.profile.profileSteps;

export default reducer;
