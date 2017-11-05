import http from './http';

const basePath = 'https://api.postmon.com.br/v1/cep';

const parseCepInfo = ({ estado, cidade, bairro, logradouro }) =>
  ({
    state: estado,
    city: cidade,
    neighborhood: bairro,
    address: logradouro,
  });

const getCepInfo = cep =>
  http.getExternal(`${basePath}/${cep}`)
    .then(parseCepInfo);

export default getCepInfo;
