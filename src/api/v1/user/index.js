import http from 'utils/http';

export default {
  createAccount: user => http.post('user', user),
  updateUserInfo: user => http.put('user', user),
};
