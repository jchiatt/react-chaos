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
        <ComponentWithChaos />
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

const ComponentWillHaveChaos = () => <GenericComponent text="may experience chaos." />
const ComponentWillHaveChaos2 = () => <GenericComponent text="may also experience chaos." />

const ComponentWithChaos = withChaos(ComponentWillHaveChaos, 1, "a custom error message, level 1");
const ComponentWithChaos2 = withChaos(ComponentWillHaveChaos2, 3, "a custom error message, level 3");

const ComponentTwo = () => <GenericComponent text="Two" />

const ComponentThree = () => (
  <NestedComponent>
    <GenericComponent text="Three" />
    <NestedComponent>
      <ErrorBoundary fallback={<Fallback />}>
        <ComponentWithChaos2 />
      </ErrorBoundary>
    </NestedComponent>
  </NestedComponent>
)


export default App;
