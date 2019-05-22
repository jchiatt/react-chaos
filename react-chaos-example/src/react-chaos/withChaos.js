import React from 'react';
import { createChaos } from './createChaos'

const withChaos = (WrappedComponent) => {
  return class extends React.Component {
    componentWillMount() {
      createChaos();
    }
    
    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      );
    }
  }
};

export default withChaos;