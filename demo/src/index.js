import React from 'react'
import withChaos from '../../src/index'
import { render } from 'react-dom'
import ErrorBoundary from '../../src/components/ErrorBoundary';
import './index.css';

function Demo() {
  return (
    <React.Fragment>
      <div className="header">
        <h1>🔥🐒💥 React Chaos</h1>
      </div>
      <button className="button" onClick={() => {
          // eslint-disable-next-line
          location.reload()
        }}>Reload</button>
      <div className="wrapper">
        <div className="container child one">
          <ComponentOne />
          <ErrorBoundary fallback={<Fallback />}>
            <ComponentWithChaos />
          </ErrorBoundary>
        </div>
        <div className="container child two">
          <ComponentTwo />
          <ErrorBoundary fallback={<Fallback />}>
            <ComponentWithChaos3 />
          </ErrorBoundary>
        </div>
        <div className="container child three">
          <ComponentThree />
        </div>
      </div>
    </React.Fragment>
  );
}

const Fallback = () => <div style={{
  backgroundColor: 'yellow',
  color: '#333',
  fontSize: '2rem',
  fontWeight: 700
}}
>
  <span> I'm handling the error gracefully. 💅 </span>
</div>

const GenericComponent = ({ text }) => <pre>Component {text}</pre>

const NestedComponent = ({ children }) => children;

const ComponentOne = () => <GenericComponent text="One" />

const ComponentWillHaveChaos = () => <GenericComponent text="may experience chaos." />
const ComponentWillHaveChaos2 = () => (
  <NestedComponent>
    <GenericComponent text="may also experience chaos 1." />
    <GenericComponent text="may also experience chaos 2." />
    <GenericComponent text="may also experience chaos 3." />
  </NestedComponent>
);

const ComponentWithChaos = withChaos(ComponentWillHaveChaos, 1, "a custom error message, level 1", true);
const ComponentWithChaos2 = withChaos(ComponentWillHaveChaos2, 3, "a custom error message, level 3", true);
const ComponentWithChaos3 = withChaos(ComponentWillHaveChaos2, 5, "a custom error message, level 5", true);

const ComponentTwo = () => (<GenericComponent text="Two" />)

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

render(<Demo />, document.querySelector('#demo'))