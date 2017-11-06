import http from 'utils/http';

export default {
  getJobs: () => http.get('job'),
  getJobsByTitle: title => http.get(`job/${title}`),
};
