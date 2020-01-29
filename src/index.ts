export = {
  defaultSeverity: 'warning',

  extends: ['./commons/rules.js', './commons/props-order.js'],

  plugins: ['stylelint-declaration-block-no-ignored-properties'],

  rules: {
    'plugin/declaration-block-no-ignored-properties': true
  }
};
