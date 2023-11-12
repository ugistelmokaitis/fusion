# fusion

! \_Linting rules for React apps.

Fusion Config: A seamless blend of pre-defined [ESLint](https://eslint.org/) rulesets, encompassing essential aspects including:

- [React](https://github.com/jsx-eslint/eslint-plugin-react)
- [React Hooks](https://github.com/facebook/react)
- [promise](https://github.com/eslint-community/eslint-plugin-promise)
- [n](https://github.com/eslint-community/eslint-plugin-n)
- [Stylelint-Prettier](https://github.com/prettier/stylelint-prettier)
- [jest](https://github.com/jest-community/eslint-plugin-jest)
- [Stylelint](https://stylelint.io/)
- [Typescript](https://github.com/typescript-eslint/typescript-eslint)
- [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [Import](https://github.com/import-js/eslint-plugin-import)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Prettier](https://prettier.io/)

## Installation

1. Install the package:

- if you're using npm:

```sh
npm install --save-dev @ugistelmokaitis/fusion
```

```sh
npm install --save-dev \
eslint \
eslint-plugin-import \
prettier \
prettier-plugin-tailwindcss \
eslint-plugin-jsx-a11y \
eslint-plugin-react \
eslint-plugin-jest \
eslint-plugin-promise \
eslint-plugin-n \
@typescript-eslint/eslint-plugin \
eslint-plugin-react-hooks \
@typescript-eslint/parser \
typescript \
stylelint \
stylelint-prettier \
jest
```

- if you're using yarn:

```sh
yarn add -D @ugistelmokaitis/fusion
```

```sh
yarn add -D \
eslint \
eslint-plugin-import \
prettier \
prettier-plugin-tailwindcss \
eslint-plugin-jsx-a11y \
eslint-plugin-react \
eslint-plugin-jest \
eslint-plugin-promise \
eslint-plugin-n \
@typescript-eslint/eslint-plugin \
eslint-plugin-react-hooks \
@typescript-eslint/parser \
typescript \
stylelint \
stylelint-prettier \
jest
```

2. Install the VS Code extensions:

```sh
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension bradlc.vscode-tailwindcss
code --install-extension stylelint.vscode-stylelint
```

3. Add the following fields to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "./node_modules/@ugistelmokaitis/fusion/eslint.js",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  },
  "prettier": "@ugistelmokaitis/fusion/prettier",
  "stylelint": {
    // optional: only if you use Stylelint otherwise omit this field
    "extends": "@ugistelmokaitis/fusion/stylelint"
  }
}
```

4. Remove any existing `.eslintrc`, `stylelint.config.js` and `.prettierrc` files from your project to avoid conflicts. As long as you have the fields above in your `package.json`, you don't need these files.

5. Add folder `.vscode` to your project root and create the following `.vscode/settings.json`:

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.tabSize": 4,
  "editor.wordWrapColumn": 120,
  "prettier.tabWidth": 4,
  "prettier.printWidth": 120,
  "emmet.showExpandedAbbreviation": "never",
  "editor.codeActionsOnSave": {
    "source.fixAll.esbenp.prettier-vscode": true,
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
