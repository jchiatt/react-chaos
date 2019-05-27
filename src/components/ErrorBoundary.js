import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null
  }

  componentDidCatch(err) {
    this.setState({
      hasError: true,
      error: err
    })
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      return fallback || <pre>Error was caught but no fallback component was provided.</pre>;
    }

    return children;
  }
}