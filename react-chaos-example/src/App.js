import React from 'react';
import Chaos from './react-chaos'

function App() {
  return (
    <>
      <Chaos level={1}>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </Chaos>
    </>
  );
}

function GenericComponent({ text }) {
  return <h1>Component {text}</h1>
}

function NestedComponent({ children }) {
  return children;
}

function ComponentOne() {
  return <GenericComponent text="One" />
}

function ComponentTwo() {
  return <GenericComponent text="Two" />
}

function ComponentThree() {
  return (
    <NestedComponent>
      <GenericComponent text="Three" />
      <GenericComponent text="Four" />
    </NestedComponent>
  )
}

export default App;
