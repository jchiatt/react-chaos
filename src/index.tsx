import * as React from 'react';
import { Chaos } from './components/Chaos';
import { Level } from './types';
import { createChaos } from './utils/createChaos';

export const initChaos = function initChaos(React: any) {
  const originalCreateElement = React.createElement;
  (React as any).createElement = function createElement(...args: any) {
    createChaos(1, 'APP WIDE CHAOS YO 🐒');
    return originalCreateElement.apply(React, args);
  };
};

type WithChaosReturn = React.ComponentClass | (() => React.ReactElement);

export const withChaos = (
  WrappedComponent: React.ElementType,
  level: Level,
  errorMessage?: string,
  runInProduction?: boolean
): WithChaosReturn => {
  if (process.env.NODE_ENV === 'production' && !runInProduction) {
    console.warn(
      `You tried to use React Chaos in production. You probably didn't mean to do this. Chaos will not occur in production.`
    );
    return () => <WrappedComponent />;
  }

  if (process.env.NODE_ENV === 'production' && runInProduction) {
    console.warn('You are running React Chaos in production.');
  }
  return class extends React.Component {
    render() {
      return (
        <Chaos
          level={level}
          errorMessage={errorMessage}
          runInProduction={runInProduction}
        >
          <WrappedComponent {...this.props} />
        </Chaos>
      );
    }
  };
};

export default initChaos;
