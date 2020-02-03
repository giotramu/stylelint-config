# Stylelint Config

Shareable [stylelint] config with great defaults. It supports CSS/PostCSS syntax, [SCSS language][sass-doc] and some CSS in JS solutions, like [Styled Components](styled-components), [Emotion.js](emotion) or [Linaria](linaria).

[![NPM Package][npm-badge]][npm]
[![Build status][circleci-badge]][circleci]
[![David][david-dep-badge]][david-dep]
[![David][david-dev-badge]][david-dev]

## Table of contents

- [Stylelint Config](#Stylelint-Config)
  - [Table of contents](#Table-of-contents)
  - [Install](#Install)
  - [Usage](#Usage)
    - [With CSS or PostCSS](#with-css-or-postcss)
    - [With SCSS](#with-scss)
    - [With CSS in JS](#with-css-in-js)
  - [Stylelint CLI](#styelint-cli)
  - [Extend the config](#extend-the-config)
  - [Thanks](#Thanks)
  - [Licence](#Licence)

## Install

Based on the CSS environment you decide to support, read the instructions below and save the devDependencies needed to your **package.json**:

```sh
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
  extends: '@giotramu/stylelint-config'
};
```

### With SASS or SCSS

```js
module.exports = {
  extends: '@giotramu/stylelint-config/dist/scss'
};
```

### With CSS in JS library

```js
module.exports = {
  extends: '@giotramu/stylelint-config/dist/hybrid'
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

## Extend the config

You can extend the configuration or overrides some rules. More details about the loading mechanism of the configuration are available on the [stylelint documentation][stylelint-doc].

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

## Licence

MIT

[npm]: https://www.npmjs.com/package/@giotramu/stylelint-config
[npm-badge]: https://badgen.net/npm/v/@giotramu/stylelint-config
[circleci]: https://circleci.com/gh/giotramu/stylelint-config
[circleci-badge]: https://badgen.net/circleci/github/giotramu/stylelint-config
[david-dep]: https://david-dm.org/giotramu/stylelint-config
[david-dev]: https://david-dm.org/giotramu/stylelint-config?type=dev
[david-peer]: https://david-dm.org/giotramu/stylelint-config?type=peer
[david-dep-badge]: https://badgen.net/david/dep/giotramu/stylelint-config
[david-dev-badge]: https://badgen.net/david/dev/giotramu/stylelint-config
[sass-doc]: https://sass-lang.com
[stylelint]: https://stylelint.io
[stylelint-declaration-block-no-ignored-properties]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[stylelint-doc]: https://stylelint.io/user-guide/configuration/#extends
[stylelint-order]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss]: https://github.com/kristerkari/stylelint-scss
[linaria]: https://github.com/callstack/linaria
[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
