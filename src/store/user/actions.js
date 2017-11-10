import { createAction } from 'redux-actions';

const setUserInfoState = createAction('SET_USER_INFO_STATE');

const updateUserInfo = ({ userInfo }, userInfoUpdated) => setState(mix(userInfo, userInfoUpdated));

const saveUserInfo = ({ userInfo }, userInfoUpdated) => (dispatch, _, api) =>
  api.updateUserInfo(mix(userInfo, userInfoUpdated))
    .then(() => updateUserInfo({ userInfo }, userInfoUpdated));

const setState = userInfo => dispatch => {
  dispatch(setUserInfoState(userInfo));
  return Promise.resolve();
};

const mix = (oldInfo, newInfo) => Object.assign(oldInfo, newInfo);

export {
  setUserInfoState,
  updateUserInfo,
  saveUserInfo,
};
