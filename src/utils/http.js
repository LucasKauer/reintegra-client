import cookie from './cookie';

const baseUrl = `http://${window.location.hostname}:3000/api/v1/`;

const request = (path, options) =>
  fetch(path, options).then(res => {
    if (res.status >= 400) {
      throw new Error(res.status);
    }
    if (res.status === 201) {
      throw new Error(res.status);
    }
    return res.json();
  });

const requestInternal = (path, options) => request(`${baseUrl}${path}`, options);

const requestExternal = (path, options) => request(path, options);

const makePayload = (method, data) =>
  ({
    method,
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
      'authorization': cookie.get().token
    }),
  });

const http = Object.assign(window.fetch, {
  get: path => requestInternal(path, makePayload('GET')),
  getExternal: path => requestExternal(path, { method: 'GET' }),
  post: (path, data) => requestInternal(path, makePayload('POST', data)),
});

export default http;
