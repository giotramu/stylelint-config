# Stylelint Config

Shareable [Stylelint] config with great defaults. It supports CSS/PostCSS syntax, [SCSS language][sass-doc] and some CSS in JS solutions, like [Styled Components](styled-components), [Emotion.js](emotion) or [Linaria](linaria).

[![npm package][npm-badge]][npm]
[![build status][ci-badge]][ci]
[![dependencies][deps-badge]][deps]
[![dev dependencies][devdeps-badge]][devdeps]

## Table of contents

- [Stylelint config](#stylelint-config)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [With CSS or PostCSS](#with-css-or-postcss)
    - [With SCSS](#with-scss)
    - [With CSS in JS](#with-css-in-js)
  - [Stylelint CLI](#styelint-cli)
  - [Extends the config](#extends-the-config)
  - [Thanks](#thanks)
  - [License](#license)

## Install

Based on the CSS environment you decide to support, read the instructions below and save the devDependencies needed to your **package.json**:

```bash
#--- CSS and PostCSS support ---#
$ npm i -D stylelint @giotramu/stylelint-config

#--- If you use SASS/SCSS ---#
$ npm i -D stylelint stylelint-scss @giotramu/stylelint-config

#--- Or if you adopt a CSS in JS library ---#
$ npm i -D stylelint stylelint-processor-styled-components @giotramu/stylelint-config
```

## Usage

Create a `.stylelintrc.js` or `stylelint.config.js` file in the project root and grab the right configuration based on the CSS environment you decide to support.

### With CSS or PostCSS

```js
module.exports = {
  extends: '@giotramu/stylelint-config',
};
```

### With SASS or SCSS

```js
module.exports = {
  extends: '@giotramu/stylelint-config/dist/scss',
};
```

### With CSS in JS library

```js
module.exports = {
  extends: '@giotramu/stylelint-config/dist/hybrid',
};
```

## Stylelint CLI

Use the stylelint CLI for linting the supported files. Drop this line into your `package.json`:

```json
{
  //...
  "scripts": {
    "lint:css": "stylelint ./styles/*.{js,ts,css,scss}"
  }
  //...
}
```

## Extends the config

You can extends the configuration or overrides some rules. More details about the loading mechanism of the configuration are available on the [stylelint documentation][stylelint-doc].

```js
module.exports = {
  extends: '@giotramu/stylelint-config',
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
  },
};
```

## Thanks

- [stylelint-declaration-block-no-ignored-properties]
- [stylelint-order]
- [stylelint-scss]

## License

[MIT License](./LICENSE)

[npm]: https://www.npmjs.com/package/@giotramu/stylelint-config
[npm-badge]: https://flat.badgen.net/npm/v/@giotramu/stylelint-config?icon=npm&label=npm%20package
[ci]: https://circleci.com/gh/giotramu/stylelint-config
[ci-badge]: https://flat.badgen.net/circleci/github/giotramu/stylelint-config?icon=circleci&label=build
[deps]: https://david-dm.org/giotramu/stylelint-config
[deps-badge]: https://flat.badgen.net/david/dep/giotramu/stylelint-config
[devdeps]: https://david-dm.org/giotramu/stylelint-config?type=dev
[devdeps-badge]: https://flat.badgen.net/david/dev/giotramu/stylelint-config
[sass-doc]: https://sass-lang.com
[stylelint]: https://stylelint.io
[stylelint-declaration-block-no-ignored-properties]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[stylelint-doc]: https://stylelint.io/user-guide/configuration/#extends
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss]: https://github.com/kristerkari/stylelint-scss
[linaria]: https://github.com/callstack/linaria
[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
