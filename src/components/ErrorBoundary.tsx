import * as React from 'react';

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
    error: null,
  };

  componentDidCatch(err: Error) {
    this.setState({
      hasError: true,
      error: err,
    });
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      return (
        fallback || (
          <pre>Error was caught but no fallback component was provided.</pre>
        )
      );
    }

    return children;
  }
}
