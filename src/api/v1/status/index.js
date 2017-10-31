import http from 'utils/http';

export default {
  verifyStatus: () => http.get('status'),
};
