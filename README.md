# 🔥🐒💥 React Chaos

Chaos Engineering for your React applications.

## What It Does

React Chaos is currently a higher order component that will randomly throw `Error`s in the component it wraps. The likelihood for the error to throw is based on a `level` you set when you wrap a component.

Blog post: [Announcing React Chaos](https://jchiatt.com/announcing-react-chaos/)
Demo: [https://react-chaos.netlify.com/](https://react-chaos.netlify.com/)

## 🛑 Pre-Installation Notes

- This is currently WIP and a proof-of-concept.
- There is nothing in place to help ensure good performance practices. Use at your own risk.

## Installation

```js
npm i --save-dev react-chaos
```

## Usage

First, import the Chaos:

```js
import withChaos from 'react-chaos';
```

Wrap any component with the Chaos:

```js
const ComponentToWrap = () => <p>I may have chaos.</p>;

const ComponentWithChaos = withChaos(ComponentToWrap);
```

You can optionally set a Chaos level between 1 and 10 (the higher the number, the more Chaos 😈) as well as a custom error message:

```js
const ComponentWithChaos = withChaos(ComponentToWrap);

const ComponentWithChaos = withChaos(
  ComponentToWrap,
  10,
  'This error message will almost certainly be shown since we are at Chaos level 10.'
);
```

Note: The default Chaos level is 5.

## Chaos in Production

By default, React Chaos _will not_ run in production. If you want to override this by passing in `true` as a 4th parameter like this:

```js
const ComponentWithChaos2 = withChaos(
  ComponentWillHaveChaos2,
  3,
  'a custom error message, level 3',
  true
);
```

## Why

- Because simple UI errors shouldn't bring down your app.
- This library can help expose areas of your component tree that don't handle errors very gracefully. Used in conjunction with [Error Boundaries](https://reactjs.org/docs/error-boundaries.html), this can be a powerful tool to improve the resiliency of your UI components.

## What is Chaos Engineering?

Chaos Engineering is the practice of experimenting with entropy on a software system to test its resiliency. You can [read more about it here](https://en.wikipedia.org/wiki/Chaos_engineering).

## Inspiration

- [Brandon Dail's post on React Error Boundaries and Fault Tolerance](https://aweary.dev/fault-tolerance-react/)
- [Brian Holt's talk on Chaos Engineering in the Browser](https://www.youtube.com/watch?v=A4_rRj-4Mv0)
- Also inspired by watching Jurassic Park the night before writing this

## Other Notes

This project uses TSDX.
