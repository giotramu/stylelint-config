module.exports = {
  root: true,

  extends: ['contactlab/typescript', 'prettier/@typescript-eslint'],

  env: {
    jest: true
  },

  rules: {
    // --- TypeScript
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        },
        extendDefaults: true
      }
    ]
  }
};
