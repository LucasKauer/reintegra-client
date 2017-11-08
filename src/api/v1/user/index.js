import http from 'utils/http';

export default {
  createAccount: user => http.post('user', user),
  updateAccount: user => http.put('user', user),
};
