# 🔥🐒 React Chaos

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Chaos Engineering for your React applications.

[build-badge]: https://img.shields.io/travis/jchiatt/react-chaos/master.png?style=flat-square
[build]: https://travis-ci.org/jchiatt/react-chaos
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-chaos
[coveralls-badge]: https://coveralls.io/repos/github/jchiatt/react-chaos/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/jchiatt/react-chaos?branch=master

## ❓ Why

- Because simple UI errors shouldn't bring down your app.
- This library can help expose areas of your component tree that don't handle errors very gracefully. Used in conjunction with [Error Boundaries](https://reactjs.org/docs/error-boundaries.html), this can be a powerful tool to improve the resiliency of your UI components.

## 🛑 Pre-Installation Notes

- This is currently WIP and a proof-of-concept.
- There is nothing in place to help ensure good performance practices. Use at your own risk.
- Nested components are not yet supported. Currently, only the immediate children wrapped with `withChaos` will have the potential for Chaos.
- Components that return functions / render props are not yet supported.

## 💻 Installation

```
npm i --save-dev react-chaos
```

## 💥 Usage

First, import the Chaos:

```
import withChaos from 'react-chaos';
```

Wrap any component with the Chaos:

```
const ComponentToWrap = () => <p>I may have chaos.</p>

const ComponentWithChaos = withChaos(ComponentToWrap);
```

You can optionally set a Chaos level between 1 and 10 (the higher the number, the more Chaos 😈) as well as a custom error message:

```
const ComponentWithChaos = withChaos(ComponentToWrap);

const ComponentWithChaos = withChaos(ComponentToWrap, 10, "This error message will almost certainly be shown since we are at Chaos level 10.");
```

Note: The default Chaos level is 5.

## 📝 Other Notes

- Inspired by [Brandon Dail's post on React Error Boundaries and Fault Tolerance](https://aweary.dev/fault-tolerance-react/).
- Also inspired by watching Jurassic Park the night before writing this.

## TODO:

- Add tests [In Progress]
- Support chaos levels on a per-component basis [In Progress]
- Support custom chaos messages on a per-component basis [In Progress]
- Support wrapping wrapping each immediate child once but specifying a different chaos level for each. [In Progress]
- Support components that return functions
- Support nested components
- Performance improvements
- Ensure this can't run in production unless explicitly set to do so
