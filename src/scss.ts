import {lowerCase} from './commons/namespaces';

export = {
  extends: ['./index.js'],

  plugins: ['stylelint-scss'],

  rules: {
    // scss if-else
    'scss/at-rule-no-unknown': true,
    'scss/at-else-if-parentheses-space-before': 'always',

    // scss placeholders
    'scss/at-extend-no-missing-placeholder': true,
    'scss/percent-placeholder-pattern': lowerCase,

    // scss functions
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': lowerCase,

    // scss imports
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // scss mixins
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': lowerCase,

    // scss declarations
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/declaration-nested-properties': 'never',

    // scss variables
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': lowerCase,
    'scss/no-duplicate-dollar-variables': true,

    // scss operators
    'scss/operator-no-unspaced': true,

    // scss selectors
    'scss/selector-no-redundant-nesting-selector': true
  }
};
