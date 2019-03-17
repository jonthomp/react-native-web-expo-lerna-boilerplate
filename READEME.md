# react-native-web-expo-lerna-boilerplate

# Features

- react-native (expo)
- react-native-web
- stand-alone shared components/functions package
- lerna
- styled-components
- webpack 4
- babel 7
- prettier

# Setup

1. Git clone this repository

   `git@github.com:jonthomp/react-native-web-expo-lerna-boilerplate.git`

2. Name your packages

   Modify the `name` in each of the `package.json` files:

   - `./package.json`
   - `./packages/common/package.json`
   - `./packages/web/package.json`
   - `./packages/native/package.json`

3. Rename the `common` dependencies

   Update the `@jonthompson/renaweexlebo-common` dependencies to match the name of your common package:

   - `./packages/web/package.json`
   - `./packages/native/package.json`

4. Rename the `common` package in the build configs:

   - `./packages/web/webpack.config.json`

     Replace the `@jonthompson/renaweexlebo-common` resolve alias with your common package name.

   - `./packages/native/rn-cli/config/json`

     Replace the `@jonthompson/renaweexlebo-common` resolver extraNodeModules with your common package name.

5. Bootstrap `lerna`

   `npx lerna bootstrap`

