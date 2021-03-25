export = {
  processors: ['stylelint-processor-styled-components'],

  rules: {
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'property-no-unknown': [
      true,
      {
        checkPrefixed: false,
        ignoreProperties: [/^styled-mixin/]
      }
    ],
    'selector-class-pattern': null,
    'value-keyword-case': null
  }
};
