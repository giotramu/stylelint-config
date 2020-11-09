# Change Log

All notable changes to the project will be documented in this file.

## 5.1.0 (2020-10-08)

### Added

--

### Changed

- Update the [`declaration-property-value-disallowed-list`](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list) rule and remove the number `0` from the blacklisted values for `border-*` CSS property.

### Fixed

--

---

## 5.0.0 (2020-09-21)

### Added

--

### Changed

- Set [`disallowInList`](https://stylelint.io/user-guide/rules/no-duplicate-selectors#optional-secondary-options) to `false` in `no-duplicate-selectors` rule;

### Fixed

- Source code refactoring

---

## 4.0.0 (2020-09-10)

### Added

--

### Changed

- Update stylelint to v13.7.0 and stylelint-scss to v3.18.0
- Update the following Stylelint rules:
  - Enable [`disallowInList`](https://stylelint.io/user-guide/rules/no-duplicate-selectors#optional-secondary-options) in `no-duplicate-selectors` rule;
  - Enable [`block-opening-brace-space-before`](https://stylelint.io/user-guide/rules/block-opening-brace-space-before#block-opening-brace-space-before) rule;
  - Enable [`selector-max-empty-lines`](https://stylelint.io/user-guide/rules/selector-max-empty-lines#selector-max-empty-lines) rule with a value of `0`;
  - Rename the deprecated rule `comment-word-disallowed-list` with `comment-word-disallowed-list`;
  - Rename the deprecated rule `declaration-property-value-blacklist` with `declaration-property-value-disallowed-list`;
  - Rename the deprecated rule `property-blacklist` with `property-disallowed-list`;
  - Rename the deprecated rule `at-rule-property-requirelist` with `at-rule-property-required-list`;

### Fixed

--

---

## 3.2.0 (2020-05-25)

### Added

--

### Changed

- Update dependencies

### Fixed

--

---

## 3.1.0 (2020-05-12)

### Added

--

### Changed

- Update dependencies

### Fixed

--

---

## 3.0.0 (2020-05-04)

### Added

--

### Changed

- Change the [configuration usage](https://github.com/giotramu/stylelint-config#usage)
- Update the following Stylelint rules:
  - `declaration-property-value-blacklist`. The **border** property value should be `0` instead of `none`;
  - `font-weight-notation`. The **font-weight** property value should be numeric instead of named. E.g `normal` ➜ `400`;
  - `scss/no-duplicate-dollar-variables`. Duplicated SASS variables are ignored in the at-rule and nested-at-rule;
  - `property-no-vendor-prefix`. Add `tab-size` and `text-size-adjust` vendor prefix;
  - `property-no-unknown`. Now, this rule checks the vendor prefix.
  - `comment-word-blacklist`. Remove `TODO:` and `FIXME:` from the word blacklist.
- Update documentation

### Fixed

- Fix CI configuration

---

## 2.3.0 (2020-04-14)

### Added

--

### Changed

- Update dependencies

### Fixed

--

---

## 2.2.3 (2020-04-02)

### Added

- Publish the package to the GitHub registry

### Changed

- Remove `README.md` from distributed files

### Fixed

- Fix some minor stuff, such `README.md`, `.gitignore`, `.prettierignore` and `.eslintignore`

---

## 2.2.2 (2020-03-24)

### Added

--

### Changed

- Update dependencies

### Fixed

--

---

## 2.1.1 (2020-02-08)

### Added

- Build types declarations

### Changed

- Update dependencies

### Fixed

--

---

## 2.1.0 (2020-02-03)

### Added

--

### Changed

- Update documentation

### Fixed

- Fix the module's main entry point

---

## 2.0.0 (2020-01-30)

### Added

--

### Changed

- Rewrite source code in TypeScript
- Set rule `selector-pseudo-class-no-unknown`
- Update dependencies

### Fixed

--
