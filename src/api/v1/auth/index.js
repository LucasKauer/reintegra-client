import http from 'utils/http';

export default {
  login: credentials => http.post('authentication', credentials),
  verifyToken: () => http.get('authentication/verify'),
};
