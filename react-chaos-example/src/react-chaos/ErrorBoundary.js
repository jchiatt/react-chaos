import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    error: false,
  }

  componentDidCatch(err) {
    this.setState({
      error: true
    })
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if ( error ) {
      return fallback;
    }
    
    return children;
  }
}