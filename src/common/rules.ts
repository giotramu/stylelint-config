import {namePattern, lowerCase} from './namespaces';

export = {
  rules: {
    // --- At-Rule
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style']
    },

    // --- Block
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {ignoreShorthands: ['grid-template']}
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,

    // --- Color
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,

    // --- Comment
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-disallowed-list': [
      ['fuck', 'shit', 'damn', 'twerk', 'egg yolk'],
      {
        severity: 'warning'
      }
    ],

    // --- Custom Property
    'custom-property-empty-line-before': 'never',

    // --- Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border(?!-(width|spacing))/': [
        /thin/,
        /medium/,
        /thick/,
        '0' // Prefer `none`
      ],
      '/^transition/': [/all/]
    },

    // --- Font Family
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': ['numeric', {ignore: ['relative']}],

    // --- Function
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // --- General
    'block-opening-brace-space-before': 'always',
    'no-descending-specificity': null, // Disabled because of https://github.com/stylelint/stylelint/issues/3196
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

    // --- Keyframe Declaration
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': lowerCase,

    // --- Length
    'length-zero-no-unit': true,

    // --- Media Feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

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

    // --- Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': namePattern,
    'selector-id-pattern': namePattern,
    'selector-max-attribute': 8,
    'selector-max-class': 8,
    'selector-max-compound-selectors': 8,
    'selector-max-empty-lines': 0,
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

    // --- String
    'string-no-newline': true,

    // --- Time
    'time-min-milliseconds': 100,

    // --- Unit
    'unit-no-unknown': true,

    // --- Value
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: [
          'grab',
          'grabbing',
          'tab-size' // It's still only prefixed in Firefox
        ]
      }
    ]
  }
};
