# Stylelint Config

Shareable [Stylelint][stylelint-url] config with great defaults. It supports CSS/PostCSS syntax, [SASS language][sass-doc-url] and some CSS in JS solutions, like [Styled Components][styled-components-url], [Emotion.js][emotion-url] or [Linaria][linaria-url].

[![NPM][npm-img]][npm-url]
[![Build Status][ci-img]][ci-url]
[![Dependencies][deps-img]][deps-url]
[![Dev Dependencies][devdeps-img]][devdeps-url]

## Table of contents

- [Stylelint Config](#stylelint-config)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Stylelint CLI](#stylelint-cli)
  - [Extend the config](#extend-the-config)
  - [Thanks](#thanks)
  - [License](#license)

## Install

> Tested on Node.js >= 12.x.

Based on the CSS environment you decide to support, save the `devDependencies` you need to your package.json:

```sh
# for CSS or PostCSS support
npm install stylelint @giotramu/stylelint-config --save-dev

# for SASS or SCSS support
npm install stylelint stylelint-scss @giotramu/stylelint-config --save-dev

# for CSS in JS support
npm install stylelint stylelint-processor-styled-components @giotramu/stylelint-config --save-dev
```

## Usage

Create a `.stylelintrc.js` or `stylelint.config.js` file in the project root and grab the right configuration based on the CSS environment you want to support.

Lint CSS or PostSCSS:

```js
module.exports = {
  extends: '@giotramu/stylelint-config'
};
```

Lint SASS or SCSS:

```js
module.exports = {
  extends: '@giotramu/stylelint-config/scss'
};
```

Lint CSS in JS:

```js
module.exports = {
  extends: '@giotramu/stylelint-config/hybrid'
};
```

## Stylelint CLI

Use Stylelint CLI to check the supported files. Drop this line into your `package.json` and customize it as your needs:

```json
{
  "scripts": {
    "lint:css": "stylelint ./styles/*.{js,ts,css,scss}"
  }
}
```

## Extend the config

You can extend the configuration or overrides some rules. More details about the loading mechanism of the configuration are available on [the Stylelint documentation][stylelint-doc-url].

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

[ci-img]: https://github.com/giotramu/stylelint-config/workflows/test%20+%20build/badge.svg?branch=stable
[deps-img]: https://badgen.net/david/dep/giotramu/stylelint-config
[devdeps-img]: https://badgen.net/david/dev/giotramu/stylelint-config
[npm-img]: https://badgen.net/npm/v/@giotramu/stylelint-config?label=npm%20package

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
