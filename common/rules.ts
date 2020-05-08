import {namePattern, lowerCase} from './namespaces';

export = {
  rules: {
    // --- at-rule
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'at-rule-property-requirelist': {
      'font-face': ['font-display', 'font-family', 'font-style']
    },

    // --- block
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {ignoreShorthands: ['grid-template']}
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,

    // --- color
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,

    // --- comment
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': [
      ['fuck', 'shit', 'damn', 'twerk', 'egg yolk'],
      {
        severity: 'warning'
      }
    ],

    // --- custom property
    'custom-property-empty-line-before': 'never',

    // --- declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-value-blacklist': {
      '/^border(?!-(width|spacing))/': [
        /thin/,
        /medium/,
        /thick/,
        '0' // prefer `none`
      ],
      '/^transition/': [/all/]
    },

    // --- font family
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': ['numeric', {ignore: ['relative']}],

    // --- function
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // --- general
    'no-descending-specificity': null, // disabled because of https://github.com/stylelint/stylelint/issues/3196
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'max-nesting-depth': [
      8,
      {
        ignore: ['pseudo-classes']
      }
    ],

    // --- keyframe declaration
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': lowerCase,

    // --- length
    'length-zero-no-unit': true,

    // --- media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // --- number
    'number-max-precision': 3,

    // --- property
    'property-blacklist': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'app-region', // for Electron
          'appearance',
          'mask',
          'tab-size',
          'text-size-adjust'
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

    // --- selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': namePattern,
    'selector-id-pattern': namePattern,
    'selector-max-attribute': 8,
    'selector-max-class': 8,
    'selector-max-compound-selectors': 8,
    'selector-max-universal': 1,
    'selector-pseudo-class-no-unknown': [
      true,
      {ignorePseudoClasses: ['/^global/']}
    ],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [true, {ignore: ['custom-elements']}],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: ['::-webkit-input-placeholder']
      }
    ],

    // --- string
    'string-no-newline': true,

    // --- time
    'time-min-milliseconds': 100,

    // --- unit
    'unit-no-unknown': true,

    // --- value
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: [
          'grab',
          'grabbing',
          'tab-size' // it's still only prefixed in Firefox
        ]
      }
    ]
  }
};
