import cookie from './cookie';

const baseUrl = `http://${window.location.hostname}:3000/api/v1/`;

const request = (path, options) =>
  fetch(`${baseUrl}${path}`, options).then(res => {
    if (res.status >= 400) {
      throw new Error(res.status);
    }
    if (res.status === 201) {
      return res;
    }
    return res.json();
  });

const makePayload = (method, data) => {
  return ({
    method,
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
      'authorization': cookie.get().token
    }),
  });
};

const http = Object.assign(window.fetch, {
  get: path => request(path, makePayload('GET')),
  post: (path, data) => request(path, makePayload('POST', data)),
});

export default http;
