# Stylelint Config

Shareable [Stylelint] config with great defaults. It supports CSS/PostCSS syntax, [SCSS language][sass-doc] and some CSS in JS solutions, like [Styled Components](styled-components), [Emotion.js](emotion) or [Linaria](linaria).

[![NPM][npm-badge]][npm]
[![Build Status][ci-badge]][ci]
[![Dependencies][deps-badge]][deps]
[![Dev Dependencies][devdeps-badge]][devdeps]

## Table of contents

- [Stylelint Config](#stylelint-config)
  - [Install](#install)
  - [Usage](#usage)
  - [Stylelint CLI](#stylelint-cli)
  - [Extends the config](#extends-the-config)
  - [Thanks](#thanks)
  - [License](#license)

## Install

Based on the CSS environment you decide to support, save the `devDependencies` you need to your package.json:

#### CSS or PostCSS support

```sh
npm install stylelint @giotramu/stylelint-config --save-dev
```

#### SASS or SCSS support

```sh
npm install stylelint stylelint-scss @giotramu/stylelint-config --save-dev
```

#### CSS in JS support

```sh
npm install stylelint stylelint-processor-styled-components @giotramu/stylelint-config --save-dev
```

## Usage

Create a `.stylelintrc.js` or `stylelint.config.js` file in the project root and grab the right configuration based on the CSS environment you decide to support.

#### Lint CSS or PostCSS

```js
module.exports = {
  extends: '@giotramu/stylelint-config'
};
```

#### Lint SASS or SCSS

```js
module.exports = {
  extends: '@giotramu/stylelint-config/dist/scss'
};
```

#### Lint CSS in JS

```js
module.exports = {
  extends: '@giotramu/stylelint-config/dist/hybrid'
};
```

## Stylelint CLI

Use the stylelint CLI for linting the supported files. Drop this line into your `package.json` and customize it as your needs:

```json
{
  "scripts": {
    "lint:css": "stylelint ./styles/*.{js,ts,css,scss}"
  }
}
```

## Extends the config

You can extends the configuration or overrides some rules. More details about the loading mechanism of the configuration are available on the [stylelint documentation][stylelint-doc].

```js
module.exports = {
  extends: '@giotramu/stylelint-config',
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null
  }
};
```

## Thanks

- [stylelint-declaration-block-no-ignored-properties]
- [stylelint-order]
- [stylelint-scss]

## License

[MIT License](./LICENSE)

[npm]: https://www.npmjs.com/package/@giotramu/stylelint-config
[npm-badge]: https://badgen.net/npm/v/@giotramu/stylelint-config?icon=npm&label=npm%20package
[ci]: https://github.com/giotramu/stylelint-config/actions
[ci-badge]: https://github.com/giotramu/stylelint-config/workflows/test%20and%20build/badge.svg?branch=master
[deps]: https://david-dm.org/giotramu/stylelint-config
[deps-badge]: https://badgen.net/david/dep/giotramu/stylelint-config
[devdeps]: https://david-dm.org/giotramu/stylelint-config?type=dev
[devdeps-badge]: https://badgen.net/david/dev/giotramu/stylelint-config
[sass-doc]: https://sass-lang.com
[stylelint]: https://stylelint.io
[stylelint-declaration-block-no-ignored-properties]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[stylelint-doc]: https://stylelint.io/user-guide/configuration/#extends
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss]: https://github.com/kristerkari/stylelint-scss
[linaria]: https://github.com/callstack/linaria
[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
