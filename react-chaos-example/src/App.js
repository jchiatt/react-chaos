import React from 'react';
import withChaos from './react-chaos/withChaos'
import ErrorBoundary from './react-chaos/ErrorBoundary';

function App() {
  return (
    <>
      <button onClick={() => {
        // eslint-disable-next-line
        location.reload()
      }}>Reload</button>
      <ComponentOne />
      <ErrorBoundary fallback={<Fallback />}>
        <ComponentOneWithChaos />
      </ErrorBoundary>
      <ComponentTwo />
      <ComponentThree />
    </>
  );
}

const Fallback = () => <div style={{ 
  height: '4rem',
  backgroundColor: 'yellow',
  color: '#333',
  fontSize: '3rem',
  fontWeight: 700
  }}
>
  <span role="img" aria-label="fire emoji.">🔥</span>
  <span> Error </span>
  <span role="img" aria-label="fire emoji.">🔥</span>
</div>

const GenericComponent = ({ text }) => <h1>Component {text}</h1>

const NestedComponent = ({ children }) => children;

const ComponentOne = () => <GenericComponent text="One" />

const ComponentOneWithChaos = withChaos(ComponentOne, 3, "a custom error message");

const ComponentTwo = () => <GenericComponent text="Two" />

const ComponentThree = () => (
  <NestedComponent>
    <GenericComponent text="Three" />
    <GenericComponent text="Four" />
  </NestedComponent>
)


export default App;
