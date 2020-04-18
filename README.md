# Stylelint Config

Shareable [Stylelint][stylelint-url] config with great defaults. It supports CSS/PostCSS syntax, [SCSS language][sass-doc-url] and some CSS in JS solutions, like [Styled Components][styled-components-url], [Emotion.js][emotion-url] or [Linaria][linaria-url].

[![NPM][npm-img]][npm-url]
[![Build Status][ci-img]][ci-url]
[![Dependencies][deps-img]][deps-url]
[![Dev Dependencies][devdeps-img]][devdeps-url]

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

You can extends the configuration or overrides some rules. More details about the loading mechanism of the configuration are available on the [stylelint documentation][stylelint-doc-url].

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

- [stylelint-declaration-block-no-ignored-properties][stylelint-declaration-block-no-ignored-properties-url]
- [stylelint-order][stylelint-order-url]
- [stylelint-scss][stylelint-scss-url]

## License

[MIT License](./LICENSE)

<!---
  B A D G E S
-->

[ci-img]: https://github.com/giotramu/stylelint-config/workflows/test%20and%20build/badge.svg?branch=master
[deps-img]: https://badgen.net/david/dep/giotramu/stylelint-config
[devdeps-img]: https://badgen.net/david/dev/giotramu/stylelint-config
[npm-img]: https://badgen.net/npm/v/@giotramu/stylelint-config?icon=npm&label=npm%20package

<!---
  L I N K S
-->

[ci-url]: https://github.com/giotramu/stylelint-config/actions
[deps-url]: https://david-dm.org/giotramu/stylelint-config
[devdeps-url]: https://david-dm.org/giotramu/stylelint-config?type=dev
[emotion-url]: https://github.com/emotion-js/emotion
[linaria-url]: https://github.com/callstack/linaria
[npm-url]: https://www.npmjs.com/package/@giotramu/stylelint-config
[sass-doc-url]: https://sass-lang.com
[styled-components-url]: https://github.com/styled-components/styled-components
[stylelint-declaration-block-no-ignored-properties-url]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[stylelint-doc-url]: https://stylelint.io/user-guide/configuration/#extends
[stylelint-order-url]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss-url]: https://github.com/kristerkari/stylelint-scss
[stylelint-url]: https://stylelint.io
