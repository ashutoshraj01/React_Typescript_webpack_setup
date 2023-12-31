# React_Typescript_webpack_setup

# Commands used while creating the project

- git init
- npm init --y
- yarn add react react-dom
- yarn add -D typescript @types/react @types/react-dom
- yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
- yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
- yarn add -D babel-loader
- yarn add -D css-loader style-loader
- yarn add -D webpack-merge
- yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- yarn add -D eslint
- yarn add -D eslint-plugin-react eslint-plugin-react-hooks
- yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
- yarn add -D eslint-plugin-import eslint-plugin-jsx-a11y
- yarn add -D prettier eslint-config-prettier eslint-plugin-react
- yarn add -D husky@4 lint-staged
- yarn add -D @babel/runtime @babel/plugin-transform-runtime
- yarn add -D copy-webpack-plugin
- yarn add -D webpack-bundle-analyzer

# Starting dev server

- yarn start
- yarn build --> will show visually bundle size in browser, easy to understand whats is taking more size.(webpack-bundle-analyzer webpack plugin)

# starting prod server

- yarn build
- cd build
- npx serve
