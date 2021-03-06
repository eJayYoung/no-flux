import { setMiddleware } from './middleware';
import { setContext } from './context';

function makeArray(arr) {
  if (!!arr) {
    return Array.isArray(arr) ? arr : [arr];
  } else {
    return [];
  }
}
function setup(key, val) {
  if (typeof key === 'string' && key.toUpperCase() === 'MIDDLEWARE') {
    setMiddleware(val);
  } else {
    setContext(key, val);
  }
}

export default {
  setup,
  makeArray,
};