import http from 'utils/http';

export default {
  login: credentials => http.post('auth', credentials),
  verifyToken: () => http.get('auth/verify'),
};
