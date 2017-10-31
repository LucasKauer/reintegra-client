const cookie = {
  set: (name, value) => (document.cookie = `${name}=${value}`),
  get: () => document.cookie
    .split('; ')
    .map(val => val.split('='))
    .reduce((acc, [name, value]) => Object.assign(acc, { [name]: value }), {}),
}

export default cookie;
