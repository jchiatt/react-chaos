import React from 'react';
import withChaos from './react-chaos/withChaos'
import ErrorBoundary from './react-chaos/ErrorBoundary';

function App() {
  return (
    <>
      <ComponentOne />
      <ErrorBoundary fallback={<Fallback />}>
        <ComponentOneWithChaos />
      </ErrorBoundary>
      <ComponentTwo />
      <ComponentThree />
    </>
  );
}

const Fallback = () => <h1>Error</h1>

const GenericComponent = ({ text }) => <h1>Component {text}</h1>

const NestedComponent = ({ children }) => children;

const ComponentOne = () => <GenericComponent text="One" />

const ComponentOneWithChaos = withChaos(ComponentOne, null, "a custom error message");

const ComponentTwo = () => <GenericComponent text="Two" />

const ComponentThree = () => (
  <NestedComponent>
    <GenericComponent text="Three" />
    <GenericComponent text="Four" />
  </NestedComponent>
)


export default App;
