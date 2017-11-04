import http from 'utils/http';

export default {
  getJobs: () => http.get('job'),
};
