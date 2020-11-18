# Stylelint Config

Strict and modular [Stylelint][stylelint-url] config with supports for CSS or PostCSS syntax, SASS language, and CSS in JS solutions, like [Styled Components][styled-components-url], [Emotion.js][emotion-url] or [Linaria][linaria-url]. It works great in conjunction with Prettier.

[![NPM][npm-img]][npm-url]
[![Build Status][ci-img]][ci-url]

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

> Tested on Node.js >= 14.x.

Based on the CSS environment you decide to support, save the `devDependencies` you need to your package.json:

```sh
# Support CSS or PostCSS
npm install --save-dev stylelint @giotramu/stylelint-config

# Support SASS or SCSS
npm install --save-dev stylelint stylelint-scss @giotramu/stylelint-config

# Support CSS in JS
npm install --save-dev stylelint stylelint-processor-styled-components @giotramu/stylelint-config
```

## Usage

Create a `stylelint.config.js` file in the project root and grab the right configuration based on the CSS environment you want to support.

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

[ci-img]: https://img.shields.io/github/workflow/status/giotramu/stylelint-config/test%20+%20build?style=flat&colorA=0c57fb&colorB=0c57fb
[npm-img]: https://img.shields.io/npm/v/@giotramu/stylelint-config?style=flat&colorA=0c57fb&colorB=0c57fb

<!---
  L I N K S
-->

[ci-url]: https://github.com/giotramu/stylelint-config/actions
[deps-url]: https://david-dm.org/giotramu/stylelint-config
[devdeps-url]: https://david-dm.org/giotramu/stylelint-config?type=dev
[emotion-url]: https://github.com/emotion-js/emotion
[linaria-url]: https://github.com/callstack/linaria
[npm-url]: https://www.npmjs.com/package/@giotramu/stylelint-config
[styled-components-url]: https://github.com/styled-components/styled-components
[stylelint-declaration-block-no-ignored-properties-url]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[stylelint-doc-url]: https://stylelint.io/user-guide/configuration/#extends
[stylelint-order-url]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss-url]: https://github.com/kristerkari/stylelint-scss
[stylelint-url]: https://stylelint.io
