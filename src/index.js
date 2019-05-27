import React from 'react';
import { Chaos } from './components/Chaos'

const withChaos = (WrappedComponent, level, errorMessage) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(`You tried to use React Chaos in production. You probably didn't mean to do this. Chaos will not occur in production.`);
    return () => <WrappedComponent />
  }
  return class extends React.Component {

    render() {
      return (
        <Chaos level={level} errorMessage={errorMessage}>
          <WrappedComponent {...this.props} />
        </Chaos>
      );
    }
  }
};

export default withChaos;