import {lowerCase} from './common/namespaces';

export = {
  extends: ['./index.js'],

  plugins: ['stylelint-scss'],

  rules: {
    // --- SCSS If-Else
    'scss/at-rule-no-unknown': true,
    'scss/at-else-if-parentheses-space-before': 'always',

    // --- SCSS Placeholders
    'scss/at-extend-no-missing-placeholder': true,
    'scss/percent-placeholder-pattern': lowerCase,

    // --- SCSS Functions
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': lowerCase,

    // --- SCSS Imports
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // --- SCSS Mixins
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': lowerCase,

    // --- SCSS Declarations
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/declaration-nested-properties': 'never',

    // --- SCSS Variables
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': lowerCase,
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInside: ['at-rule', 'nested-at-rule']
      }
    ],

    // --- SCSS Operators
    'scss/operator-no-unspaced': true,

    // --- SCSS Selectors
    'scss/selector-no-redundant-nesting-selector': true
  }
};
