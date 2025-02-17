module.exports = {
  ...require('eslint-config-skuba'),
  ignores: [...require('eslint-config-skuba').ignores, 'src/*.js'],
};
