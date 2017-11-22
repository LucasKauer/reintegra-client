import http from 'utils/http';

export default {
  createAccount: user => http.post('user', user),
  updateUserInfo: user => http.put('user', user),
  getUserInfoByNickname: nickname => http.get(`user/${nickname}`),
  getUserNickname: () => http.get('user/nickname'),
};
