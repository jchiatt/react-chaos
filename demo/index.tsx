import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withChaos, initChaos } from '../src/index';
initChaos(React);
import ErrorBoundary from '../src/components/ErrorBoundary';
import './index.css';

function Demo() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="container child one">
          <ComponentOne />
          <ErrorBoundary fallback={<Fallback />}>
            <ComponentWithChaos />
          </ErrorBoundary>
        </div>
      </div>
    </React.Fragment>
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
    <span> I'm handling the error gracefully. 💅 </span>
  </div>
);

const Text = ({ text }) => <pre>Component {text}</pre>;

const ComponentOne = () => <Text text="One" />;

const ComponentMayHaveChaos = () => <Text text="may experience chaos." />;

const ComponentWithChaos = withChaos(
  ComponentMayHaveChaos,
  5,
  'a custom error message, level 5',
  true
);

ReactDOM.render(<Demo />, document.querySelector('#root'));
