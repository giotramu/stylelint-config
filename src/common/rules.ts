import {namePattern, lowerCase} from './namespaces';

export = {
  rules: {
    // --- General / Sheet
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': [
      true,
      {
        disallowInList: false
      }
    ],
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'max-nesting-depth': [
      8,
      {
        ignore: ['pseudo-classes']
      }
    ],

    // --- At-rule
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style']
    },

    // --- Block
    'block-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {ignoreShorthands: ['grid-template']}
    ],
    'declaration-block-no-shorthand-property-overrides': true,

    // --- Color
    'alpha-value-notation': 'percentage',
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'hue-degree-notation': 'angle',

    // --- Comment
    'comment-no-empty': true,
    'comment-word-disallowed-list': [
      ['fuck', 'shit', 'damn', 'twerk', 'egg yolk']
    ],

    // --- Declaration
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border(?!-(width|spacing))/': [/thin/, /medium/, /thick/],
      '/^transition/': [/all/]
    },

    // --- Font Family
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': ['numeric', {ignore: ['relative']}],

    // --- Function
    'function-calc-no-invalid': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-no-scheme-relative': true,

    // --- Keyframe
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': lowerCase,

    // --- Length
    'length-zero-no-unit': true,

    // --- Media Feature
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,

    // --- Number
    'number-max-precision': 3,

    // --- Property
    'property-disallowed-list': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'app-region', // For Electron
          'appearance',
          'mask',
          'tab-size' // It's still only prefixed in Firefox
        ]
      }
    ],
    'property-no-unknown': [
      true,
      {
        checkPrefixed: true
      }
    ],
    'shorthand-property-no-redundant-values': true,

    // --- Selector
    'selector-class-pattern': namePattern,
    'selector-id-pattern': namePattern,
    'selector-max-attribute': 8,
    'selector-max-class': 8,
    'selector-max-compound-selectors': 8,
    'selector-max-empty-lines': 0,
    'selector-max-specificity': null,
    'selector-max-type': 8,
    'selector-max-id': 2,
    'selector-max-pseudo-class': 8,
    'selector-max-universal': 1,
    'selector-pseudo-class-no-unknown': [
      true,
      {ignorePseudoClasses: ['global', 'local']}
    ],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [true, {ignore: ['custom-elements']}],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: ['::-webkit-input-placeholder']
      }
    ],

    // --- String
    'string-no-newline': true,

    // --- Time
    'time-min-milliseconds': 100,

    // --- Unit
    'unit-no-unknown': true,

    // --- Value
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['grab', 'grabbing']
      }
    ],

    // --- Code Styles
    // General / Sheet
    indentation: [2, {baseIndentLevel: 1}],
    linebreaks: 'unix',
    'max-line-length': null,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'max-empty-lines': 2,
    'unicode-bom': 'never',
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: ['after-comment']
      }
    ],

    // At-rule
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless'],
        ignore: ['inside-block', 'after-comment']
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    // Comment
    'comment-empty-line-before': null,
    'comment-whitespace-inside': 'always',

    // Custom Property
    'custom-property-empty-line-before': 'never',

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',

    // Font Family
    'font-family-name-quotes': 'always-where-recommended',

    // Function
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': null,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // Media Feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Media Query
    'media-query-list-comma-newline-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': null,
    'media-query-list-comma-space-before': 'never',

    // Number
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // Property
    'property-case': 'lower',

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',

    // String
    'string-quotes': [
      'single',
      {
        avoidEscape: false
      }
    ],

    // Unit
    'unit-case': 'lower',

    // Value
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0
  }
};
