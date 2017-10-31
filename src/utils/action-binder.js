import { bindActionCreators } from 'redux';

const arity = bindActionCreators.length;

export default (...args) => args.length === arity
  ? bindActionCreators(...args)
  : bindActionCreators.bind(null, ...args);
