# Change Log

All notable changes to the project will be documented in this file.

## 7.0.0 (2021-03-25)

- ![breaking] Rename the config `@giotramu/stylelint-config/hybrid` in `@giotramu/stylelint-config/styled`
- Setup new rules in `@giotramu/stylelint-config/styled`:
  - `property-no-unknown` rule to `ignoreProperties: ['styled-mixin0']`. [Linaria](https://github.com/callstack/linaria) library is now supported by default;
  - `selector-class-pattern` rule to `null`;
  - `value-keyword-case` rule to `null`;

---

## 6.0.0 (2020-12-12)

- Setup new rules, like `alpha-value-notation`, `color-function-notation`
- ![breaking] Split the Stylelint rules into three different files: `index` (the base config), `scss`, `styled`. Details on the new configuration setup are available in the [README](https://github.com/giotramu/stylelint-config#configs)
- ![breaking] Add style-related rules in the base config. If you use **Prettier**, follow the [instructions](https://github.com/giotramu/stylelint-config#prettier)
- Update the `README.md` content
- Update dependencies

---

## 5.1.3 (2020-11-25)

- Compile the TypeScript code to support the ECMAScript 2015 syntax. Support for Node version 12.x is guaranteed

---

## 5.1.2 (2020-11-24)

- Compile the TypeScript code to support the ECMAScript 2020 syntax

---

## 5.1.1 (2020-11-22)

- Distribute the `CHANGELOG.md` (this file) with NPM and GitHub packages
- Update dependencies

---

## 5.1.0 (2020-10-08)

- ![breaking] Update the [`declaration-property-value-disallowed-list`](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list) rule and remove the number `0` from the blacklisted values for `border-*` CSS property.

---

## 5.0.0 (2020-09-21)

- ![breaking] Set [`disallowInList`](https://stylelint.io/user-guide/rules/no-duplicate-selectors#optional-secondary-options) to `false` in `no-duplicate-selectors` rule;
- ![breaking] Source code refactoring

---

## 4.0.0 (2020-09-10)

- Update stylelint to v13.7.0 and stylelint-scss to v3.18.0
- ![breaking] Update the following Stylelint rules:
  - Enable [`disallowInList`](https://stylelint.io/user-guide/rules/no-duplicate-selectors#optional-secondary-options) in `no-duplicate-selectors` rule;
  - Enable [`block-opening-brace-space-before`](https://stylelint.io/user-guide/rules/block-opening-brace-space-before#block-opening-brace-space-before) rule;
  - Enable [`selector-max-empty-lines`](https://stylelint.io/user-guide/rules/selector-max-empty-lines#selector-max-empty-lines) rule with a value of `0`;
  - Rename the deprecated rule `comment-word-disallowed-list` with `comment-word-disallowed-list`;
  - Rename the deprecated rule `declaration-property-value-blacklist` with `declaration-property-value-disallowed-list`;
  - Rename the deprecated rule `property-blacklist` with `property-disallowed-list`;
  - Rename the deprecated rule `at-rule-property-requirelist` with `at-rule-property-required-list`;

---

## 3.2.0 (2020-05-25)

- Update dependencies

---

## 3.1.0 (2020-05-12)

- Update dependencies

---

## 3.0.0 (2020-05-04)

- ![breaking] Change the [configuration usage](https://github.com/giotramu/stylelint-config#usage)
- ![breaking] Update the following Stylelint rules:
  - `declaration-property-value-blacklist`. The **border** property value should be `0` instead of `none`;
  - `font-weight-notation`. The **font-weight** property value should be numeric instead of named. E.g `normal` ➜ `400`;
  - `scss/no-duplicate-dollar-variables`. Duplicated SASS variables are ignored in the at-rule and nested-at-rule;
  - `property-no-vendor-prefix`. Add `tab-size` and `text-size-adjust` vendor prefix;
  - `property-no-unknown`. Now, this rule checks the vendor prefix.
  - `comment-word-blacklist`. Remove `TODO:` and `FIXME:` from the word blacklist.
- Update documentation
- Fix CI configuration

---

## 2.3.0 (2020-04-14)

- Update dependencies

---

## 2.2.3 (2020-04-02)

- Publish the package to the GitHub registry
- Remove `README.md` from distributed files
- Fix some minor stuff, such `README.md`, `.gitignore`, `.prettierignore` and `.eslintignore`

---

## 2.2.2 (2020-03-24)

- Update dependencies

---

## 2.1.1 (2020-02-08)

- Build types declarations
- Update dependencies

---

## 2.1.0 (2020-02-03)

- Fix the module's main entry point
- Update documentation

---

## 2.0.0 (2020-01-30)

- ![breaking] Rewrite source code in TypeScript
- ![breaking] Set rule `selector-pseudo-class-no-unknown`
- Update dependencies

[breaking]: https://shields.io/badge/-breaking-202d3a?style=flat-square
