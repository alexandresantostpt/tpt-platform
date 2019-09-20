[![Build Status](https://travis-ci.com/dextra/tpt-platform.svg?token=vxnPpNeV26x68X1q2Vud&branch=master)](https://travis-ci.com/dextra/tpt-platform)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c36cafe6be834e37a4395a630c09f108)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=dextra/tpt-platform&utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/dextra/tpt-platform/badge.svg)](https://snyk.io/test/github/dextra/tpt-platform)
[![codecov](https://codecov.io/gh/dextra/tpt-platform/branch/master/graph/badge.svg?token=k1Dh6UC05o)](https://codecov.io/gh/dextra/tpt-platform)

Mobile application for the Teresa Peres Tours project.

## Specifications

-   React
-   JavaScript

## Dependencies

-   [axios](https://www.npmjs.com/package/axios): Handle HTTP requests, responses and interceptors.
-   [cleave.js](https://www.npmjs.com/package/cleave.js): Format and mask inputs.
-   [final-form](https://www.npmjs.com/package/final-form): Manage and build forms.
-   [gsap](https://www.npmjs.com/package/gsap): Build animations.
-   [history](https://www.npmjs.com/package/history): Use History API to navigate without reload page.
-   [i18next](https://www.npmjs.com/package/i18next): Internacionaliation API messages.
-   [immutable](https://www.npmjs.com/package/immutable): Make data and state immutable's.
-   [jwt-decode](https://www.npmjs.com/package/jwt-decode): Decode a JWT token from the API.
-   [moment](https://www.npmjs.com/package/moment): Manipulate dates.
-   [normalize.css](https://www.npmjs.com/package/normalize.css): Reset all CSS styles in different browsers.
-   [pubsub-js](https://www.npmjs.com/package/pubsub-js): Handle if events.
-   [query-string](https://www.npmjs.com/package/query-string): Get query params at address browser.
-   [react](https://www.npmjs.com/package/react): Handle if UI interactions.
-   [react-datepicker](https://www.npmjs.com/package/react-datepicker): Datepicker componente to use with hour.
-   [react-dates](https://www.npmjs.com/package/react-dates): Datepicker componente.
-   [react-router](https://www.npmjs.com/package/react-router): Create a system routes to do navigations and transictions beside pages.
-   [react-redux](https://www.npmjs.com/package/react-redux): A set of the components to make Redux simpler.
-   [redux](https://www.npmjs.com/package/redux): A global state management.
-   [redux-actions](https://www.npmjs.com/package/redux-actions): Create and handle with actions creaters with a simplefy way.
-   [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension): Debug redux state and data on browser.
-   [redux-immutable](https://www.npmjs.com/package/redux-immutable): Use Immutable with Redux.
-   [redux-logger](https://www.npmjs.com/package/redux-logger): Log all actions and dispatchs on browser console.
-   [redux-saga](https://www.npmjs.com/package/redux-saga): Middleware to do async calls.
-   [reselect](https://www.npmjs.com/package/reselect): Make selectors memoized's.
-   [sort-by](https://www.npmjs.com/package/sort-by): Sort some array more easier.
-   [styled-components](https://www.npmjs.com/package/styled-components): Define CSS in JS.
-   [uuid](https://www.npmjs.com/package/uuid): Create unique ID's.

## Dev Dependencies

-   [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli): Check `commit` message.
-   [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional): Default configuration for `commitlint`.
-   [cypress](https://www.npmjs.com/package/cypress): Create functional automaizated tests.
-   [docz](https://www.npmjs.com/package/docz): Create a documentation to all components.
-   [husky](https://www.npmjs.com/package/husky): Listen Github hooks.
-   [jest](https://www.npmjs.com/package/jest): Framework to run all tests.
-   [moxios](https://www.npmjs.com/package/moxios): Mock axios call's.
-   [prettier](https://www.npmjs.com/package/prettier): Automatically format codes.
-   [prop-types](https://www.npmjs.com/package/prop-types): Define all props and default values for the components props.
-   [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): Create a snapshot files.
-   [reactotron-react-native](https://www.npmjs.com/package/reactotron-react-native): Inspect the app worflow and use.
-   [stylelint](https://www.npmjs.com/package/stylelint): Lint for `.css` files and styled-components styles.

### Setup

First, you need clone the project:

```
git clone REPOSITORY_URL
```

After previous step have been done, navigate to root project directory and install all dependencies:

Using `npm`:

```
npm i
```

or, using `yarn`:

```
yarn
```

Cool, we almost there, just more a few steps.

Now, you have been finish the basic setup steps, it's possible run a few scripts, each one have your respective propose.

## Scripts

-   `build`: Generate a build folder to deploy the platform.
-   `check:code`: Check if all files it's a valid pattern.
-   `ci`: Run all tests for CI/CD integration.
-   `commitlint`: Validate the `commit` message look [.commitlintrc.json](FILE_LINK) for more info.
-   `csslint`: Validate all CSS patterns files.
-   `csslint:fix`: if `lint` script has some errors, run the same script with `:fix` to try resolve all errors automatic.
-   `cypress`: Run all tests in background.
-   `cypress:chrome`: Run all tests at Google Chrome.
-   `cypress:open`: Open a Cypress Dashboard to view and run individual tests.
-   `docz:dev`: Start a development server to view the documentation of the components.
-   `docz:build`: Generate a build folder to deploy the documentation of the components.
-   `format:code`: Format all files.
-   `jslint`: Validate all JavaScript patterns files.
-   `jslink:fix`: if `lint` script has some errors, run the same script with `:fix` to try resolve all errors automatic.
-   `lint`: Validate all patterns files.
-   `link:fix`: if `lint` script has some errors, run the same script with `:fix` to try resolve all errors automatic.
-   `sclint`: Validate all CSS in JS patterns files.
-   `sclint:fix`: if `sclint` script has some errors, run the same script with `:fix` to try resolve all errors automatic.
-   `start`: Listen and build new file changes.
-   `test`: Run all tests with `.test.js` prefix.
-   `test:w` Run all tests with `.test.js` prefix and lock terminal for future changes.

## Starting development

Start a development server running `start` script:

```
npm start
```

Or, with `yarn`:

```
yarn start
```

## Testing

To run all API tests, just run:

```
npm test
```

## Linting

To run check pattern and sintax JavaScript files, just run:

```
npm run lint
```

To run check pattern and sintax CSS in JS, just run:

```
npm run check:code
```

And format:

```
npm run format:code
```

All scripts it can be runned with `npm` or `yarn`, feel free to use your favorite.

Copyright © 2019 TPT Team
