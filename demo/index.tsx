import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initChaos } from '../src/index';
initChaos(React);
import ErrorBoundary from '../src/components/ErrorBoundary';
import './index.css';

function Demo() {
  return (
    <>
      <div className="wrapper">
        <div className="container child one">
          <ErrorBoundary fallback={<Fallback />}>
            <ComponentOne />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

const Fallback = () => (
  <div
    style={{
      backgroundColor: 'yellow',
      color: '#333',
      fontSize: '2rem',
      fontWeight: 700,
    }}
  >
    <span>I'm handling the error gracefully. 💅</span>
  </div>
);

const Text = ({ text }) => <pre>Component {text}</pre>;

const ComponentOne = () => <Text text="One" />;

ReactDOM.render(<Demo />, document.querySelector('#root'));
