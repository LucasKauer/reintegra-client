import { handleActions } from 'redux-actions';
import { setProfileModalState } from './actions';

const initialState = {
  profileSteps: 0,
  userProfile: {},
};

const reducer = handleActions({
  [setProfileModalState]: (state, action) => ({
    ...state,
    profileSteps: action.payload.profileSteps,
    userProfile: action.payload.userProfile,
  }),
}, initialState);

export const getProfileModalState = state => state.profile.profileSteps;
export const getUserProfileState = state => state.profile.userProfile;

export default reducer;
