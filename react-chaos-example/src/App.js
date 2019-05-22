import React from 'react';
import withChaos from './react-chaos/withChaos'
import ErrorBoundary from './react-chaos/ErrorBoundary';

function App() {
  return (
    <>
      <ComponentOneWithChaosAndBoundary />
      <ComponentTwo />
      <ComponentThree />
    </>
  );
}

const Fallback = () => <h1 color="red">Error</h1>

function GenericComponent({ text }) {
  return <h1>Component {text}</h1>
}

function NestedComponent({ children }) {
  return children;
}

function ComponentOne() {
  return <GenericComponent text="One" />
}

const ComponentOneWithChaos = withChaos(ComponentOne);
const ComponentOneWithChaosAndBoundary = () => (
  <ErrorBoundary fallback={<Fallback />}>
    <ComponentOneWithChaos />
  </ErrorBoundary>
)

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
