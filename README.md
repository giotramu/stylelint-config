# Stylelint Config

Strict and modular [Stylelint][stylelint-url] config with supports for CSS or PostCSS syntax, SASS language, and CSS in JS solutions, like [Styled Components][styled-components-url], [Emotion.js][emotion-url] or [Linaria][linaria-url]. It works great in conjunction with Prettier.

[![NPM][npm-img]][npm-url]
[![Build Status][ci-img]][ci-url]

- [Stylelint Config](#stylelint-config)
  - [Configs](#configs)
  - [Prettier](#prettier)
  - [Extend the config](#extend-the-config)
  - [Integrating Stylelint with IDEs/editors](#integrating-stylelint-with-ideseditors)
  - [Thanks](#thanks)
  - [License](#license)

## Configs

> Note: Base config includes the style-related rules. It is strongly recommended to use Prettier for these purposes. Read [here](#prettier) for details.

<details>
<summary><b>Base config (CSS and PostCSS)</b></summary>

1. Install config:

   ```sh
   npm i -D stylelint @giotramu/stylelint-config
   ```

2. Create a `.stylelintrc.json` file in the root of your project, and extend from it:

   ```diff
   {
     "extends": [
   +   "@giotramu/stylelint-config"
     ]
   }
   ```

3. Use Stylelint CLI to check the supported files. Drop this line into your `package.json`:

   ```diff
   {
     "scripts": [
   +   "lint:css": "stylelint ./styles/*.{css,pcss}"
     ]
   }
   ```

4. Lint your code:

   ```sh
   npm run lint:css
   ```

   </details>

<details>
<summary><b>SASS/SCSS Syntax</b></summary>

1. Install config:

   ```sh
   npm i -D stylelint stylelint-scss @giotramu/stylelint-config
   ```

2. Create a `.stylelintrc.json` file in the root of your project, and extend from it:

   ```diff
   {
     "extends": [
       "@giotramu/stylelint-config",
   +   "@giotramu/stylelint-config/scss"
     ]
   }
   ```

3. Use Stylelint CLI to check the supported files. Drop this line into your `package.json`:

   ```diff
   {
     "scripts": [
   +   "lint:css": "stylelint ./styles/*.{sass,scss}"
     ]
   }
   ```

4. Lint your code:

   ```sh
   npm run lint:css
   ```

   </details>

<details>
<summary><b>CSS in JS Syntax</b></summary>

1. Install config:

   ```sh
   npm i -D stylelint stylelint-scss @giotramu/stylelint-config
   ```

2. Create a `.stylelintrc.json` file in the root of your project, and extend from it:

   ```diff
   {
     "extends": [
       "@giotramu/stylelint-config",
   +   "@giotramu/stylelint-config/hybrid"
     ]
   }
   ```

3. Use Stylelint CLI to check the supported files. Drop this line into your `package.json`:

   ```diff
   {
     "scripts": [
   +   "lint:css": "stylelint ./styles/*.{js,ts}"
     ]
   }
   ```

4. Lint your code:

   ```sh
   npm run lint:css
   ```

   </details>

## Prettier

This _optional_ config just disables the Stylelint code formatting rules and let [Prettier][prettier-url] to handle them.

```diff
{
 "extends": [
   "@giotramu/stylelint-config",
   "@giotramu/stylelint-config/scss",
+   "@giotramu/stylelint-config/prettier"
 ]
}
```

## Extend the config

You can extend the configuration or overrides some rules. More details about the loading mechanism of the configuration are available on [the Stylelint documentation][stylelint-doc-url].

```diff
{
 "extends": "@giotramu/stylelint-config",
 "rules": [
+   "selector-id-pattern": null
+   "selector-class-pattern": null
 ]
}
```

## Integrating Stylelint with IDEs/editors

<details>
<summary><b>Visual Studio Code</b></summary>

1. Install [Stylelint plugin][stylelint-vscode-url]

2. Add the following to your `.vscode/settings.json`:
   ```json
   "css.validate": false,
   "scss.validate": false,
   "editor.codeActionsOnSave": {
     "source.fixAll.stylelint": true
   }
   ```
   </details>

## Thanks

- [stylelint-declaration-block-no-ignored-properties][stylelint-declaration-block-no-ignored-properties-url]
- [stylelint-order][stylelint-order-url]
- [stylelint-scss][stylelint-scss-url]

## License

[MIT License](./LICENSE)

<!--
  B A D G E S
-->

[ci-img]: https://img.shields.io/github/workflow/status/giotramu/stylelint-config/test%20+%20build?style=flat-square&colorA=202d3a&colorB=0c57fb
[npm-img]: https://img.shields.io/npm/v/@giotramu/stylelint-config?style=flat-square&colorA=202d3a&colorB=0c57fb

<!--
  L I N K S
-->

[ci-url]: https://github.com/giotramu/stylelint-config/actions
[deps-url]: https://david-dm.org/giotramu/stylelint-config
[devdeps-url]: https://david-dm.org/giotramu/stylelint-config?type=dev
[emotion-url]: https://github.com/emotion-js/emotion
[linaria-url]: https://github.com/callstack/linaria
[npm-url]: https://www.npmjs.com/package/@giotramu/stylelint-config
[prettier-url]: https://prettier.io/
[styled-components-url]: https://github.com/styled-components/styled-components
[stylelint-declaration-block-no-ignored-properties-url]: https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
[stylelint-doc-url]: https://stylelint.io/user-guide/configuration/#extends
[stylelint-order-url]: https://github.com/hudochenkov/stylelint-order
[stylelint-scss-url]: https://github.com/kristerkari/stylelint-scss
[stylelint-url]: https://stylelint.io
[stylelint-vscode-url]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
