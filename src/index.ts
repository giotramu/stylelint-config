export = {
  defaultSeverity: 'warning',

  extends: ['./common/rules.js', './common/props-order.js'],

  plugins: ['stylelint-declaration-block-no-ignored-properties'],

  rules: {
    'plugin/declaration-block-no-ignored-properties': true
  }
};
